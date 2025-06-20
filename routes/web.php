<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function() {
    return inertia('Home');
})->name('home');

Route::get('/sign-up', function() {
    return inertia('SignUp');
})->name('sign_up');

Route::get('/sign-in', function() {
    return inertia('SignIn');
})->name('sign_in');

Route::prefix('/auth')->group(function() {
    Route::get('/user', [AuthController::class, 'user'])->name('user');
    Route::post('/register', [AuthController::class, 'register'])->name('register_user');
    Route::post('/login', [AuthController::class, 'login'])->name('login_user');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout_user');
});

