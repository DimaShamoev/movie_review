<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Actor>
 */
class ActorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'actor_name' => $this->faker->firstName(),
            'actor_surname' => $this->faker->lastName(),
            'actor_age' => $this->faker->numberBetween(20, 50),
            'actor_bio' => $this->faker->paragraph(),
        ];
    }
}
