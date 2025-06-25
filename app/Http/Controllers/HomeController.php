<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;

class HomeController {
    
    public function showHomePage() {
        $movies = Movie::with('movieWatchlist')->get();

        return inertia('Home', ['movies' => $movies]);
    }

}