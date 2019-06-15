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
        </div>
    </div>
</div>
@endsection
