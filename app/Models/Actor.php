<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actor extends Model {

    use HasFactory;
    
    protected $fillable = [
        'actor_name',
        'actor_surname',
        'actor_age',
        'actor_bio',
    ];

    public function movies() {
        return $this->belongsToMany(Movie::class, 'actors_movies');
    }

}