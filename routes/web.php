<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WatchlistController;
use Illuminate\Support\Facades\Route;


Route::get('/', [HomeController::class, 'showHomePage'])->name('home_page');
Route::get('/watchlist', [WatchlistController::class, 'showWatchlistPage'])->name('watchlist_page');
Route::get('/profile', [ProfileController::class, 'showProfilePage'])->name('profile_page');

Route::get('/sign-in', [AuthController::class, 'showSingInPage'])->name('sign_in_page');
Route::get('/sign-up', [AuthController::class, 'showSingUpPage'])->name('sign_up_page');


Route::prefix('/auth')->group(function() {
    Route::get('/user', [AuthController::class, 'user'])->name('user');
    Route::post('/register', [AuthController::class, 'register'])->name('register_user');
    Route::post('/login', [AuthController::class, 'login'])->name('login_user');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout_user');
});

