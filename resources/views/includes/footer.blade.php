@php
    $data['social_media_links'] = \App\Models\Setting::whereIn('key',['LINKEDIN_LINK','GITHUB_LINK','WHATSAPP_LINK','X_LINK','INSTAGRAM_LINK'])->pluck('value','key');
@endphp


<div class="footer">
    <div class="footer__builder">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">

                    <div class="social-links scrolla-element-anim-1 scroll-animate" data-animate="active">

                        @if(isset($data['social_media_links']['LINKEDIN_LINK']) && $data['social_media_links']['LINKEDIN_LINK']!='')
                            <a target="_blank" rel="nofollow" href="{{ $data['social_media_links']['LINKEDIN_LINK'] }}" title="Linkedin">
                                <i aria-hidden="true" class="fab fa-linkedin"></i>
                            </a>
                        @endif
                        @if(isset($data['social_media_links']['GITHUB_LINK']) && $data['social_media_links']['GITHUB_LINK']!='')
                            <a target="_blank" rel="nofollow" href="{{ $data['social_media_links']['GITHUB_LINK'] }}" title="Github">
                                <i aria-hidden="true" class="fab fa-github"></i>
                            </a>
                        @endif
                        @if(isset($data['social_media_links']['WHATSAPP_LINK']) && $data['social_media_links']['WHATSAPP_LINK']!='')
                            <a target="_blank" rel="nofollow" href="{{ $data['social_media_links']['WHATSAPP_LINK'] }}" title="Whatsapp">
                                <i aria-hidden="true" class="fab fa-whatsapp"></i>
                            </a>
                        @endif
                        @if(isset($data['social_media_links']['X_LINK']) && $data['social_media_links']['X_LINK']!='')
                            <a target="_blank" rel="nofollow" href="{{ $data['social_media_links']['X_LINK'] }}" title="Twitter">
                                <i aria-hidden="true" class="fab fa-twitter"></i>
                            </a>
                        @endif
                        @if(isset($data['social_media_links']['INSTAGRAM_LINK']) && $data['social_media_links']['INSTAGRAM_LINK']!='')
                            <a target="_blank" rel="nofollow" href="{{$data['social_media_links']['INSTAGRAM_LINK']}}" title="Instagram">
                                <i aria-hidden="true" class="fab fa-instagram"></i>
                            </a>
                        @endif
                    </div>

                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">

                    <div class="copyright-text align-center scrolla-element-anim-1 scroll-animate" data-animate="active">
                        © @php echo date('Y'); @endphp <strong>Rajan Rathod</strong>. All rights reserved
                    </div>

                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">

                    <div class="copyright-text align-right scrolla-element-anim-1 scroll-animate" data-animate="active">
                        Developed by <strong>Me :)</strong>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>


