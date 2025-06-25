<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;

class HomeController {
    
    public function showHomePage() {
        $movies = Movie::with('movieWatchlist')->inRandomOrder()->get();
        $latesTenMovies = Movie::latest()->take(10)->get();

        return inertia('Home', [
            'movies' => $movies,
            'latestMovies' => $latesTenMovies
        ]);
    }

}