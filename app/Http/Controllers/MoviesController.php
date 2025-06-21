<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MoviesController {
    
    public function showAddPage() {
        return inertia('AddMovie');
    }

    public function createMovie(Request $request) {

        $imagePaths = [];

        if ($request->hasFile('movie_cover_image')) {
            foreach($request->file('movie_cover_image') as $image) {
                $path = $image->store('uploads', 'public');
                $imagePaths[] = $path;
            }
        }

        $movie = Movie::create([
            'movie_title' => $request->input('movie_title'),
            'movie_description' => $request->input('movie_description'),
            'movie_duration' => $request->input('movie_duration'),
            'movie_director' => $request->input('movie_director'),
            'movie_cover_image' => json_encode($imagePaths),
            'movie_release_date' => $request->input('movie_release_date')
        ]);


        return redirect('/');
    }

    public function movieInfo($id) {
        $movie = Movie::find($id);

        return Inertia::render('MovieInfo', ['movie' => $movie]);
    }

}