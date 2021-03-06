<?php

namespace App;

use App\Question;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function questions()
    {
        return $this->hasMany(Question::class);
    }
    public function ask(Question $question)
    {
        $tag = \App\Tag::where('name', '=', request('tag'))->first();

        $this->questions()->save($question)->tags()->attach($tag);
        return \App\Question::find($question->id);
    }
}
