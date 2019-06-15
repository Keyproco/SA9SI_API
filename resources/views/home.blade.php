@extends('layouts.app')

@section('content')
<div class="container">
<div class="row justify-content-center">

  <div class="col-md-2">
<div class="list-group">
   @foreach ($tags as $tag)
   <a href="/tag/{{$tag}}"  class="list-group-item list-group-item-action ">  {{$tag}} </a>
    @endforeach
</div>

  </div>
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <div id="example" class="title m-b-md">

                </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
