@extends('layouts.app', ['title' => $data['title'], 'description' => $data['description'], 'keywords' => $data['keywords']])

@section('content')

    <home
        :hiro = "{{ json_encode($data['hiro']) }}"
        :blogs = "{{ json_encode($data['blogs']) }}"
    />

@endsection

{{--@section('javascripts')--}}
{{--<script type="text/javascript">--}}
{{--    --}}
{{--</script>--}}
{{--@endsection--}}
