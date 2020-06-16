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
        return response()->json(Article::latest()->paginate(5));
    }
    public function init(Request $request){
        $user = Auth::user();
        $xid  = bcrypt((rand(1000,9999) . $user->username . $request->get('client_xid')));
        $dontcare = array("#", "$", ".", "/", "\\", "@", " ");
        $xid = str_replace($dontcare, "", $xid);
        $xid = substr($xid,-14);
        return response()->json(Article::create([
          'user_id' => $user->id,'xid' => $xid,'title'=>'Title ...','description' => 'Description ...'
        ]));
    }
    public function get(Request $request){
        //return response()->json($request);
        $article = Article::where('xid', $request->input('xid'))->first();
        return response()->json($article);
    }
    public function update(Request $request){
        $article = Article::where('xid', $request->input('xid'))->first();
        $article->title = $request->input('title');
        $article->description = $request->input('description');
        return response()->json($article->save());
    }
}