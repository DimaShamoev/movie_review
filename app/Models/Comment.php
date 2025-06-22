<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model {

    protected $fillable = [
        "user_id",
        "movie_id",
        'comment'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function movie() {
        return $this->belongsTo(Movie::class);
    }

    public function likedComment() {
        return $this->hasMany(LikeComment::class);
    }

}