<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $this->validate($request, [
            'username' => 'required',
            'password' => 'required'
        ]);
        $user = User::where('email', $request->username)->first();
        if (!$user) {
            return response(['status' => 'Error', 'message' => 'User not found']);
        }
        if (Hash::check($request->password, $user->password)) {
            return response(['status' => 'Success', 'acess_token' =>  $user->createToken('authToken')->accessToken], 201);
        } else {
            return response(['status' => 'Error', 'message' => 'Wrong password']);
        }
    }
}
