@extends('layouts.app')

@section('content')


@if(\Session::get('success'))
<div class="container">
    {{-- <div class="col-1"></div> --}}
    <div class="row">
            <div class="alert alert-success alert-dismissible fade show" role="alert">
            <div class="alert-body">
                {{ \Session::get('success') }}
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
</div>
@endif

<login :message="{{ json_encode($data['message']) }}"/>

@endsection
