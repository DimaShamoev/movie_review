<?php

namespace App\Http\Controllers;

use App\Models\User;
use Cookie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;
use \Illuminate\Validation\ValidationException;
class AuthController
{

    public function showSingInPage()
    {
        return inertia('SignIn');
    }

    public function showSingUpPage()
    {
        return inertia('SignUp');
    }

    public function user()
    {
        return Auth::user();
    }

    public function register(Request $request)
    {

        $validated = $request->validate([
            'first_name' => 'required|string|max:50|min:3',
            'last_name' => 'required|string|max:50|min:3',
            'email' => 'required|string|email|unique:email|max:50|min:3',
            'password' => 'required|string|max:50|min:8',
        ]);

        $user = User::create([
            'first_name' => $validated['first_name'],
            'last_name' => $validated['last_name'],
            'email' => $validated['email'],
            'password' => $validated['password'],
        ]);

        return redirect()->route('home_page');
    }

    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|string|email|max:50|min:3',
            'password' => 'required|string|max:50|min:2'
        ]);

        $credentials = $request->only('email', 'password');

        if (Auth::guard('web')->attempt($credentials)) {
            return redirect()->route('home_page');
        }

        throw ValidationException::withMessages([
            'email' => 'The provided credentials are incorrect.',
        ]);
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }

}