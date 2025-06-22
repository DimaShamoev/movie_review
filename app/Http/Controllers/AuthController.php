<?php

namespace App\Http\Controllers;

use App\Models\User;
use Cookie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class AuthController {

    public function showSingInPage() {
        return inertia('SignIn');
    }

    public function showSingUpPage() {
        return inertia('SignUp');
    }
    
    public function user() {
        return Auth::user();
    }

    public function register(Request $request) {
        $user = User::create([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'email' => $request->input('email'),
            'password' => $request->input('password'),
        ]);

        return redirect()->route('home_page');
    }

    public function login(Request $request) {
        $credentials = request(['email', 'password']);

        if (Auth::guard('web')->attempt($credentials)) {
            return redirect()->route('home_page');
        }
        
        return response([
            'message' => 'You are not logged in'
        ]);

    }

    public function logout(Request $request) {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }

}