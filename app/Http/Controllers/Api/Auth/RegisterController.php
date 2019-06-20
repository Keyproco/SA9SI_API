<?php

namespace App\Http\Controllers\Api\Auth;

use Laravel\Passport\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Route;

class RegisterController extends Controller
{
    private $client;
    public function __construct()
    {
        $this->client = Client::find(1);
    }
    public function register(Request $request)
    {
        $this->validate(
            $request,
            [
                'name' => 'required',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|min:6|confirmed',
            ]
        );

        $user = User::create([
            'name' => request('name'),
            'email' => request('email'),
            'password' => bcrypt(request('password')),
        ]);
        $accessToken = $user->createToken('authToken')->accessToken;
        return response(['user' => $user, 'access_token' => $accessToken]);
    }
}
