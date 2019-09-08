<?php

namespace App\Http\Requests;

use Storage;
use App\Question;
use Illuminate\Foundation\Http\FormRequest;

class QuestionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|string',
            'body' => 'required|string',
            'tag' => 'required|string',
            'image' => 'required'
        ];
    }
    public function processQuestionRequest()
    {
        $file = request()->file('image');
        $ext = $file->extension();
        $path = $file->store('public/covers-' . auth()->id());
        $publicPath = \Storage::url($path);

        auth()->user()->ask(new Question(array_merge($this->only(['title', 'body', 'tag']), [
            'user_id' => auth()->id(),
            'image' => $publicPath
        ])));
    }
}
