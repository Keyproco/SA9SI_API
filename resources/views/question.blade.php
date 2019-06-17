@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Ma Question: </div>
                <div id="question">
                <div class="panel panel-default">
                <div class="panel-body">
                    {{$question->title}}
                </div>
                <div class="panel-footer">{{$question->body}}</div>
                </div>
                </div>
            </div>
            Réponses :
            @foreach ($question->answers as $answer)
    <p> {{ $answer->body }}</p>
@endforeach
<form action="/question/{{$question->id}}/answers" method="post">
    @csrf
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Commentaire par </label>
    <textarea name="body" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">poster</button>
</form>
        </div>
    </div>

</div>
@endsection
