<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;

class HomeController {
    
    public function showHomePage() {
        return inertia('Home', ['movies' => Movie::all()]);
    }

}