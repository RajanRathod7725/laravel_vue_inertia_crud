<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" >
<head>
    <meta charset="utf-8">
    <title>{{ $title }}</title>
    <meta name="description" content="{{ $description }}" />
    <meta name="keywords" content="{{ $keywords }}"/>
    @include('includes/headerscript')
</head>
<body class="home light-skin">
    <div class="container-page">
        <!-- Preloader -->
        <div class="preloader">
            <div class="centrize full-width">
                <div class="vertical-center">
                    <div class="spinner-logo">
                        <img src="{{ asset('images/logo.png') }}" alt="Rajan Rathod - The Full Stack Developer :)" >
                        <div class="spinner-dot"></div>
                        <div class="spinner spinner-line"></div>
                    </div>
                </div>
            </div>
        </div>

        <div id="app">

            @include('includes/header')

            <div class="main">

                @yield('content')

            </div>

        </div>
    </div>

    @include('includes/footer')

    @include('includes/footerscript')

    @yield('javascripts')
</body>
</html>
