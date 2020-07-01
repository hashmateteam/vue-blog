<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

use App\Article; 
use App\User;
use App\ArticleLike;

class ArticleController extends Controller {
    public $successStatus = 200;
    /** 
     * login api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    
    public function index(Request $request){
        if($request->exists('user_id')){
            $bool = false;
            if(Auth::check()){
                $user = Auth::user();
                $bool = true;
            }
            $articles = User::where('id',$request->input('user_id'))->first()->articles()->where('is_publish',1)->latest()->paginate(5);
            foreach ($articles as $key => $article){
                $article->image_src = asset("/storage/".$article->image_src);
                $articles[$key] = $article;
                $articles[$key]->{'user'} = $article->user()->first();
                $articles[$key]->{'likes_array'} = $article->likes()->get();
                if($bool){
                    if($article->likes()->where('user_id',$user->id)->count() > 0){
                        $articles[$key]->{'auth_user_like'} = true;    
                    }else{
                        $articles[$key]->{'auth_user_like'} = false;
                    }
                }
                if(ArticleLike::where([['article_id',$articles[$key]->id],['user_id',$user->id]])->count() > 0){
                    $articles[$key]->auth_user_like = true;
                }

            }
            return response()->json($articles);
        }else{
            $articles = Article::where('is_publish',1)->latest()->paginate(5);
            foreach ($articles as $key => $article){
                $article->image_src = asset("/storage/".$article->image_src);
                $articles[$key] = $article;
                $articles[$key]->{'user'} = $article->user()->first();
                $articles[$key]->{'likes_array'} = $article->likes()->get();
                $articles[$key]->{'auth_user_like'} = true;
            }
            return response()->json($request->exists('user_id'));
        }
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
        $article->image_src = asset("/storage/".$article->image_src);
        return response()->json($article);
    }
    public function view(Request $request){
        $article = Article::where([
            ['xid',$request->input('xid')],
            ['is_publish',1]
        ])->first();
        $article->image_src = asset("/storage/".$article->image_src);
        $article->{'user'} = $article->user()->first();
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
    public function upload_image(Request $request){
        $user = Auth::user();
        $article = Article::where([
            ['xid', $request->input('xid')],['user_id',$user->id]
        ])->first();
        if ($request->hasFile('image')) {
            if ($request->file('image')->isValid()) {
                $article->image_src = Str::after($request->image->store('public/images'),'public/');
                return response()->json($article->save());
            }else{
                return response()->json(["status"=>false,"reason"=>"invalid photo"]);
            }
        }else{
            return response()->json(["status"=>false,"reason"=>"file not attached"]);
        }
    }
    public function delete_image(Request $request){
        $user = Auth::user();
        $article = Article::where([
            ['xid', $request->input('xid')],['user_id',$user->id]
        ])->first();
        if(Storage::exists('/public/'.$article->image_src)){
            if(Storage::delete('/public/'.$article->image_src)){
                $article->image_src = null;
                return response()->json($article->save());
            }
        }
        return response()->json(["status"=>false,"reason"=>"file not exist"]);
    }
    public function like_article(Request $request){
        $user = Auth::user();
        $article = Article::where([
            ['xid', $request->input('xid')],['user_id',$user->id]
        ])->first();
        $article_like = ArticleLike::where([['article_id',$article->id],['user_id',$user->id]])->get();
        if($article_like->count() > 0){
            ArticleLike::where([['article_id',$article->id],['user_id',$user->id]])->delete();
            $article->likes--;
            $article->save();
            return response()->json(false);
        }
        ArticleLike::create([
            'article_id' => $article->id,
            'user_id' => $user->id
        ]);
        $article->likes++;
        return response()->json($article->save());
    }
}