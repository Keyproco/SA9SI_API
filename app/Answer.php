<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    protected $fillable = ['body', 'user_id', 'question_id'];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
