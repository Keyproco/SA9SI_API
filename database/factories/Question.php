<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Question;
use Faker\Generator as Faker;

$factory->define(Question::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence,
        'body' => $faker->sentence,
        'user_id' => $faker->numberBetween(1, 5),
        'updated_at' => now(),
        'created_at' => now(),
    ];
});
