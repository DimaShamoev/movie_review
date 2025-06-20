<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WatchlistController {
    public function showWatchlistPage() {
        return inertia('Watchlist');
    }   
}