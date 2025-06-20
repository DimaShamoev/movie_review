<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('movies', function (Blueprint $table) {
            $table->id();
            $table->string('movie_title');
            $table->text('movie_description');
            $table->string('movie_duration');
            $table->string('movie_director');
            $table->string('movie_cover_image');
            $table->date('movie_release_date');
            $table->timestamps();
        });
    }

    
    public function down(): void {
        Schema::dropIfExists('movies');
    }
};
