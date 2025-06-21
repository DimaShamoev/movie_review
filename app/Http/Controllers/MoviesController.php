<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Movie;
use Auth;
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
            'movie_release_date' => $request->input('movie_release_date'),
            'trailer_link' => $request->input('trailer_link')
        ]);


        return redirect('/');
    }

    public function movieInfo($id) {
        $movie = Movie::find($id);
        $comments = Comment::where('movie_id', $id)->with('user')->get();

        return Inertia::render('MovieInfo', [
            'movie' => $movie,
            'comments' => $comments
        ]);
    }

    public function movieComment(Request $request, $movie_id) {
        $user = Auth::user();


        Comment::create([
            'user_id' => $user->id,
            'movie_id' => $movie_id,
            'comment'=> $request->input('comment')
        ]);
    

        return redirect()->back();

    }

}