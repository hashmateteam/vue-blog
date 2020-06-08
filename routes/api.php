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

Route::post('/users/authup', 'UserController@store');
//Route::get('/post/edit/{id}', 'PostController@edit');
//Route::post('/post/update/{id}', 'PostController@update');
//Route::delete('/post/delete/{id}', 'PostController@delete');
Route::get('/users/authstatus', 'UserController@auth');