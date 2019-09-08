<?php

namespace App;

use App\Answer;
use App\Tag;
use App\User;
use Auth;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = ['body', 'user_id', 'title', 'image'];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function answers()
    {
        return $this->hasMany(Answer::class);
    }
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
    public function answer($body)
    {
        return $this->answers()->create(['body' => $body, 'user_id' => auth()->id()]);
    }
}
