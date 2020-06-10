<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller; 
use Illuminate\Support\Facades\Hash;

use App\User; 

class UserController extends Controller {
    public $successStatus = 200;
    /** 
     * login api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    
    public function authin(Request $request){
        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(["auth"=>false],202);
        }
        $credentials = ['username' => $request->get('username'),'password' => $request->get('password')];
        if (Auth::attempt($credentials,$request->get('remember'))) {
            // Authentication passed...
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('authin')->accessToken; 
            return response()->json(['success' => $success],$this->successStatus);
        }
        return response()->json(["auth"=>"There is some problem in your credentials"],202); 
    }
    /** 
     * Register api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    
    public function authup(Request $request) { 
        
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'username' => 'required|unique:users,username',
            'email' => 'required|unique:users,email',
            'password' => 'required',
            'contact' => 'required'
        ]);
        //return response()->json($validator->fails());
        if ($validator->fails()) {
            return response()->json($validator->errors(),202);
        }
        $input = $request->all(); 
        $input['password'] = bcrypt($input['password']); 
        $user = User::create($input);
        $success['token'] =  $user->createToken('authin')-> accessToken; 
        $success['name'] =  $user->name;
        return response()->json(['success'=>$success], $this->successStatus); 
    }
    /** 
     * any api function
     * 
     * @return \Illuminate\Http\Response 
    */  
    public function authcx() 
    { 
        return ( Auth::check() ? response()->json(true) : response()->json(false) );
    } 
}