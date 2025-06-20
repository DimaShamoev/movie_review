<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController {

    public function showProfilePage() {
        return inertia('Profile');
    }

}