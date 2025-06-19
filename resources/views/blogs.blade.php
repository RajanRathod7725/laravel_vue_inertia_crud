@extends('layouts.app', ['title' => $data['title'], 'description' => $data['description'], 'keywords' => $data['keywords']])

@section('content')

    <blogs :description = "{{ json_encode($data['description']) }}"/>

@endsection

{{--@section('javascripts')--}}
{{--<script type="text/javascript">--}}
{{--    --}}
{{--</script>--}}
{{--@endsection--}}
