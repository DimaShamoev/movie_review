<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Like;
use App\Models\LikeComment;
use App\Models\Movie;
use Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Log;

class MoviesController
{

    public function showAddPage()
    {
        return inertia('AddMovie');
    }

    public function createMovie(Request $request)
    {

        $validated = $request->validate([
        'movie_title' => 'required|string|max:255',
        'movie_description' => 'required|string',
        'movie_duration' => 'required|integer|min:1',
        'movie_director' => 'required|string|max:255',
        'movie_cover_image.*' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:4096',
        'movie_release_date' => 'required|date',
        'trailer_link' => 'nullable|url|max:255',
    ]);

        $imagePaths = [];

        if ($request->hasFile('movie_cover_image')) {
            foreach ($request->file('movie_cover_image') as $image) {
                $path = $image->store('uploads', 'public');
                $imagePaths[] = $path;
            }
        }

        $movie = Movie::create([
            'movie_title' => $validated['movie_title'],
            'movie_description' => $validated['movie_description'],
            'movie_duration' => $validated['movie_duration'],
            'movie_director' => $validated['movie_director'],
            'movie_cover_image' => json_encode($imagePaths),
            'movie_release_date' => $validated['movie_release_date'],
            'trailer_link' => $validated['trailer_link'],
        ]);


        return redirect('/');
    }

    public function movieInfo($id) {
        $user = Auth::user();

        $movie = Movie::with('likes')->findOrFail($id);

        $movie->user_like = $user
            ? $movie->likes->firstWhere('user_id', $user->id)
            : null;

        $comments = Comment::where('movie_id', $id)->with('user')->get();

        $commentIds = $comments->pluck('id');
        $commentLikes = LikeComment::whereIn('comment_id', $commentIds)
            ->with('user')
            ->get();

        $likes = $movie->likes;

        return Inertia::render('MovieInfo', [
            'movie' => $movie,
            'comments' => $comments,
            'likes' => $likes,
            'commentLikes' => $commentLikes,
        ]);
    }


    public function movieComment(Request $request, $movie_id)
    {
        $user = Auth::user();


        Comment::create([
            'user_id' => $user->id,
            'movie_id' => $movie_id,
            'comment' => $request->input('comment')
        ]);


        return redirect()->back();
    }

    public function removeComment($comment_id) {
        $comment = Comment::findOrFail($comment_id);

        $comment->delete();

        return redirect()->back();
    }

    public function movieLike($movie_id) {
        $user = Auth::user();

        $likeExist = Like::where('user_id', $user->id)->where('movie_id', $movie_id)->first();

        if (!$likeExist) {
            Like::create([
                'user_id' => $user->id,
                'movie_id' => $movie_id
            ]);
        }

        return;
    }

    public function movieUnlike($movie_id) {
        $user = Auth::user();
        $likeExist = Like::where('user_id', $user->id)->where('movie_id', $movie_id)->first();
    
        if ($likeExist) {
            $likeExist->delete();
        }
    
    }


    public function commentLike($comment_id) {
        $user = Auth::user();

        $commentLikeExist = LikeComment::where('user_id', $user->id)->where('comment_id', $comment_id)->first();

        if (!$commentLikeExist) {
            LikeComment::create([
                'user_id' => $user->id,
                'comment_id' => $comment_id
            ]);
        } else {
            $commentLikeExist->delete();
        }
    }

}