<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Answer;
use Faker\Generator as Faker;

$factory->define(Answer::class, function (Faker $faker) {
    return [
        'body' => $faker->sentence,
        'user_id' => $faker->numberBetween(0, 5),
        'question_id' => $faker->numberBetween(0, 5),
        'updated_at' => now(),
        'created_at' => now(),
    ];
});
