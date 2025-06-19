@extends('layouts.app', ['title' => $data['title'], 'description' => $data['description'], 'keywords' => $data['keywords']])

@section('content')

<blog_detail :blog = "{{ json_encode($data['blog']) }}" :next = "{{ json_encode($data['next']) }}" />

@endsection
