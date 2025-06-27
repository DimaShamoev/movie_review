<?php

use App\Http\Controllers\ActorsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MoviesController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WatchlistController;
use Illuminate\Support\Facades\Route;

// Home page
Route::get('/', [HomeController::class, 'showHomePage'])->name('home_page');

// Admins
Route::get('/add-movie', [MoviesController::class, 'showAddPage'])->name('add_movie_page');
Route::post('/create/movie', [MoviesController::class, 'createMovie'])->name('post_movie');

// User
Route::get('/profile', [ProfileController::class, 'showProfilePage'])->name('profile_page');
Route::get('/sign-in', [AuthController::class, 'showSingInPage'])->name('sign_in_page');
Route::get('/sign-up', [AuthController::class, 'showSingUpPage'])->name('sign_up_page');

// Watchlist
Route::get('/watchlist/{user_id}', [WatchlistController::class, 'userWatchlist'])->name('user_watchlist');
Route::post('/watchlist/add/{id}', [WatchlistController::class, 'addToWatchlist'])->name('add_watchlist');
Route::delete('/watchlist/delete/{id}', [WatchlistController::class, 'removeWatchlist'])->name('remove_watchlist');


// Auth
Route::prefix('/auth')->group(function() {
    Route::get('/user', [AuthController::class, 'user'])->name('user');
    Route::post('/register', [AuthController::class, 'register'])->name('register_user');
    Route::post('/login', [AuthController::class, 'login'])->name('login_user');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout_user');
});

// Single movie page
Route::get('/movie/{id}', [MoviesController::class, 'movieInfo'])->name('about_movie');

// Movies
Route::post('/movie/like/{movie_id}', [MoviesController::class, 'movieLike'])->name('like_movie');
Route::delete('/movie/unlike/{movie_id}', [MoviesController::class, 'movieUnlike'])->name('unlike_movie');
Route::post('/movie/comment/create/{movie_id}', [MoviesController::class, 'movieComment'])->name('movie_comment');
Route::post('/movie/comment/like/{comment_id}', [MoviesController::class, 'commentLike'])->name('like_comment');
Route::delete('/movie/comment/delete/{comment_id}', [MoviesController::class, 'removeComment'])->name('remove_comment');

// actors
Route::get('/actors/add-form', [ActorsController::class, 'actorsAddPage'])->name('add_actor_form');
Route::post('/actors/add', [ActorsController::class, 'storeActor'])->name('add-actor');