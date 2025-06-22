<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Like extends Model {

    protected $table = 'movie_likes';

    protected $fillable = [
        'user_id',
        'movie_id',
    ];

    public function user() {

        return $this->belongsTo(User::class);

    }

    public function movie() {
        return $this->belongsTo(Movie::class);
    }

}