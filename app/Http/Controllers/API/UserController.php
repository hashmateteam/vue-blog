<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller; 
use Illuminate\Support\Facades\Hash;

use App\User; 
use App\Article; 
use App\Ul; 
use App\Upl;
use App\Uplc;

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
            return response()->json(['success' => $success,'user'=>$user],$this->successStatus);
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
        return response()->json(['success'=>$success,'user'=>Auth::user()], $this->successStatus); 
    }
    /** 
     * any api function
     * 
     * @return \Illuminate\Http\Response 
    */  
    public function authcx() 
    {   if(Auth::check()){
            return response()->json(true);
            //return response()->json(auth()->user()->articles()->latest()->paginate(5));
        }else{
           return response()->json(false);
        }
    }
    public function general_data(Request $request){
        $validator = Validator::make($request->all(), [
           'username' => 'required',
        ]);
        //return response()->json($validator->fails());
        if ($validator->fails()) {
            return response()->json($validator->errors(),202);
        }
        $user = User::where(["username"=>$request->input('username')])->first();
        //$user->{'links'} = Ul::where(["user_id"=>$user->id])->get(); 
        //$links = Ul::select(["value","upls_id"])->where(["user_id"=>$user->id])->get();
        //$user->{'links'} = 
        $links = $user->links()->select(['value','upls_id','id'])->get();
        $user_links = array();
        foreach($links as $link){
            $possible_link = Upl::where("id",$link->upls_id)->first();
            $possible_links_cat = Uplc::where("id",$possible_link->uplcs_id)->first();
            array_push($user_links ,['id'=>$link->id,'name'=>$possible_link->name,'value'=>$link->value,'icon'=>$possible_link->icon,'category'=>$possible_links_cat->name]);
        }
        $user->{'links'} = $user_links;
        return response()->json($user);
    }
}