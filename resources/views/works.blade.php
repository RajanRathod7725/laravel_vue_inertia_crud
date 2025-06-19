@extends('layouts.app', ['title' => $data['title'], 'description' => $data['description'], 'keywords' => $data['keywords']])

@section('content')

    <works :description = "{{ json_encode($data['description']) }}"/>

@endsection

{{--@section('javascripts')--}}
{{--<script type="text/javascript">--}}
{{--    --}}
{{--</script>--}}
{{--@endsection--}}
