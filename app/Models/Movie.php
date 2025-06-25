<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model {

    protected $fillable = [
        'movie_title',
        'movie_description',
        'movie_duration',
        'movie_director',
        'movie_cover_image',
        'movie_release_date',
        'trailer_link',
    ];

    protected $hidden = [];

    public function movieWatchlist() {
        return $this->hasMany(Watchlist::class);
    }

    public function movieComment() {
        return $this->hasMany(Comment::class);
    }

    public function likes() {
        return $this->hasMany(Like::class);
    }

}