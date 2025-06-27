<?php

namespace App\Http\Controllers;

use App\Models\Actor;
use Illuminate\Http\Request;

class ActorsController {
    
    public function actorsAddPage() {
        return inertia('AddActor');
    }

    public function storeActor(Request $request) {

        $validated = $request->validate([
            'actor_name' => 'string|min:3|required',
            'actor_surname' => 'string|min:3|required',
            'actor_age' => 'integer|required',
            'actor_bio' => 'string|required',
        ]);

        Actor::create([
            'actor_name' => $validated['actor_name'],
            'actor_surname' => $validated['actor_surname'],
            'actor_age' => $validated['actor_age'],
            'actor_bio' => $validated['actor_bio'],
        ]);

        return redirect()->back();

    }

}
