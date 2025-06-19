<script src="{{ asset('/js/jquery.min.js') }} "></script>
<script defer src="{{ asset('/js/jquery.validate.min.js') }} "></script>
<script defer src="{{ asset('/js/bootstrap.js') }}"></script>
<script defer src="{{ asset('/js/swiper.js') }}"></script>
<script defer src="{{ asset('/js/splitting.js') }}"></script>
<script defer src="{{ asset('/js/jarallax.min.js') }}"></script>
<script defer src="{{ asset('/js/magnific-popup.js') }}"></script>
<script defer src="{{ asset('/js/imagesloaded.pkgd.js') }}"></script>
<script defer src="{{ asset('/js/isotope.pkgd.js') }}"></script>
<script defer src="{{ asset('/js/jquery.scrolla.js') }}"></script>
<script defer src="{{ asset('/js/skrollr.js') }}"></script>
<script defer src="{{ asset('/js/jquery.cookie.js') }}"></script>
<script defer src="{{ asset('/js/typed.js') }}"></script>
<script defer src="{{ asset('/js/common.js') }}"></script>

<!-- Highlighted Code-->

<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.11.1/build/highlight.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.11.1/build/languages/go.min.js"></script>
<script>
    hljs.highlightAll();
</script>

@vite(['resources/js/app.js'])
