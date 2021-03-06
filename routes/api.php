<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('view_profile','API\UserController@general_data');
Route::post('authin', 'API\UserController@authin');
Route::post('authup', 'API\UserController@authup');
Route::get('articles', 'API\ArticleController@index');

Route::group(['middleware' => 'auth:api'], function(){
      Route::post('authcx', 'API\UserController@authcx');
      Route::post('init_article','API\ArticleController@init');
      Route::post('get_article','API\ArticleController@get');
      Route::post('view_article','API\ArticleController@view');
      Route::post('update_article','API\ArticleController@update');
      Route::post('publish_article','API\ArticleController@publish');
      Route::post('upload_image','API\ArticleController@upload_image');
      Route::post('delete_image','API\ArticleController@delete_image');
      Route::post('like_article','API\ArticleController@like_article');
});