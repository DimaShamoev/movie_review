<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Models\Watchlist;
use Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController {

    public function showProfilePage() {
        $user = Auth::user();
        $watchlists = Watchlist::with('movie')
        ->where('user_id', Auth::id())
        ->latest()
        ->take(5)
        ->get();

        return Inertia::render('Profile', [
            'user' => $user,
            'watchlists' => $watchlists,
        ]);
    }

}