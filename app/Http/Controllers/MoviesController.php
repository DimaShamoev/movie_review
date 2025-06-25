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

        $imagePaths = [];

        if ($request->hasFile('movie_cover_image')) {
            foreach ($request->file('movie_cover_image') as $image) {
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