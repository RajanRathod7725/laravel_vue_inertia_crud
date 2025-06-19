@extends('layouts.app')

@section('content')

    <reset_password user_slack="{{ json_encode($user_slack) }}" password_reset_token="{{ json_encode($password_reset_token) }}" />

@endsection

