<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="HandheldFriendly" content="true">
<meta name="author" content="Rajan Rathod">

{{--Favicon Icon--}}
<link rel="shortcut icon" href="{{ asset('/images/favicon.ico') }}" type="image/x-icon">
<link rel="icon" href="{{ asset('/images/favicon.ico') }}" type="image/x-icon">

<!-- CSRF Token -->
<meta name="csrf-token" content="{{ csrf_token() }}">

<!-- Other SEO metas -->

<meta name="Content-Language" content="en-us" />
<meta name="contact" content="rajdev7725@gmail.com" />
<meta name="reply-to" content="rajdev7725@gmail.com" />
<meta name="copyright" content="Rajan Rathod"/>
<meta name="Distribution" content="Global"/>
<meta name="Robots" content="all, follow" />

{{--@if(auth()->check())--}}
{{--    <script>--}}
{{--            window.authUser = {!!  auth()->user() !!};--}}
{{--    </script>--}}
{{--@endif--}}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.11.1/build/styles/gml.min.css">
@vite(['resources/sass/app.scss', 'resources/js/app.js'])
