<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller {
    public function showIndex() {
        return inertia('Home');
    }
}
