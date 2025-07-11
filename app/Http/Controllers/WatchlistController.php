<?php

namespace App\Http\Controllers;

use App\Models\Watchlist;
use Auth;

class WatchlistController {
    public function showWatchlistPage() {
        return inertia('Watchlist');
    }   

    public function addToWatchlist($movie_id) {
        
        $user = Auth::user();

        $exist = Watchlist::where('user_id', $user->id)->where('movie_id', $movie_id)->first();

        if (!$exist) {
            Watchlist::create([
                'user_id' => $user->id,
                'movie_id' => $movie_id
            ]);
        }

        return redirect('/');

    }

    public function userWatchlist($user_id) {
        $watchlist = Watchlist::where('user_id',  $user_id)->with('movie')->get();

        return inertia('Watchlist', ['watchlist' => $watchlist]);
    }

    public function removeWatchlist($movie_id) {
        $user = Auth::user();
        $isWatchlisted = Watchlist::where('user_id', $user->id)->where('movie_id', $movie_id    )->first();

        if ($isWatchlisted) {
            $isWatchlisted->delete();
        }

        return redirect()->back();
    }
}