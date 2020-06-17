<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;

use App\Article; 

class ArticleController extends Controller {
    public $successStatus = 200;
    /** 
     * login api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    
    public function index(){
        $articles = Article::where('is_publish',1)->latest()->paginate(10);
        foreach ($articles as $key => $article){
            $article->image_src = asset($article->image_src);
            $articles[$key] = $article;
        }
        return response()->json($articles);
    }
    public function init(Request $request){
        $user = Auth::user();
        $xid  = bcrypt((rand(1000,9999) . $user->username . $request->get('client_xid')));
        $dontcare = array("#", "$", ".", "/", "\\", "@", " ");
        $xid = str_replace($dontcare, "", $xid);
        $xid = substr($xid,-14);
        return response()->json(Article::create([
          'user_id' => $user->id,'xid' => $xid
        ]));
    }
    public function get(Request $request){
        //return response()->json($request);
        $user = Auth::user();
        $article = Article::where([
                ['xid',$request->input('xid')],
                ['user_id',$user->id]
            ])->first();
        return response()->json($article);
    }
    public function update(Request $request){
        $user = Auth::user();
        $article = Article::where([
                ['xid', $request->input('xid')],['user_id',$user->id]
            ])->first();
        $article->title = $request->input('title');
        $article->description = $request->input('description');
        return response()->json($article->save());
    }
    public function publish(Request $request){
        $user = Auth::user();
        $article = Article::where([
                ['xid', $request->input('xid')],['user_id',$user->id]
            ])->first();
        $article->is_publish = $request->input('is_publish');
        $article->title = $request->input('title');
        $article->description = $request->input('description');
        return response()->json($article->save());
    }
    public function image(Request $request){
        $user = Auth::user();
        $article = Article::where([
            ['xid', $request->input('xid')],['user_id',$user->id]
        ])->first();
        if ($request->hasFile('image')) {
            if ($request->file('image')->isValid()) {
                $article->image_src = $request->image->store('images');
                return response()->json($article->save());
            }else{
                return response()->json(["status"=>false,"reason"=>"invalid photo"]);
            }
        }else{
            return response()->json(["status"=>false,"reason"=>"file not attached"]);
        }
    }
}