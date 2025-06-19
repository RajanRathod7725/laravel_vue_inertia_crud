@extends('layouts.app')

@section('content')

<insights 
    :blogs = "{{ json_encode($data['blogs']) }}" 
    :videos = "{{ json_encode($data['videos']) }}" 
/>

@endsection
