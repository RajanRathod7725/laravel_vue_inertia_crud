<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    @include('admin/includes/simple/headerscript')
</head>
<body id="kt_body" class="app-blank bgi-size-cover bgi-position-center bgi-no-repeat">

    @yield('content')
        
    @include('admin/includes/simple/footerscript')

</body>
</html>
