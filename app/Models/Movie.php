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
        'movie_release_date'
    ];

    protected $hidden = [];

}