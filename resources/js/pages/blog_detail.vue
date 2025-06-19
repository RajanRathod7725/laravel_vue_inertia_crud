<template>

    <!-- Section Started Heading -->
    <section class="section section-inner started-heading">
        <div class="container">

            <!-- Heading -->
            <div class="m-titles align-center">
                <div class="m-category scrolla-element-anim-1 scroll-animate" data-animate="active">
                    Posted On <b>{{ moment(String(blog.post_date)).format('MMM DD, YYYY') }}</b> by Me :)
                </div>
                <h1 class="m-title scrolla-element-anim-1 scroll-animate" data-animate="active">
                    {{ blog.title }}
                </h1>
            </div>

        </div>
    </section>

    <!-- Single Post Image -->
    <div class="section section-inner m-image-large">
        <div class="container">
            <div class="v-line-right v-line-top"><div class="v-line-block"><span></span></div></div>
        </div>
        <div class="image">
            <div class="img scrolla-element-anim-1 scroll-animate" data-animate="active" :style="{ backgroundImage: `url(${blog.image})` }"></div>
        </div>
    </div>

    <!-- Section - Blog -->
    <section class="section section-inner m-archive">
        <div class="container">

            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-1">

                    <!-- content -->
                    <div class="description">
                        <div class="post-content" v-html="blog.description">

                        </div>
                    </div>

                </div>
            </div>

            <div class="v-line-left v-line-top"><div class="v-line-block"><span></span></div></div>

        </div>
    </section>


    <!-- Section Navigation -->
    <div class="section section-inner m-page-navigation">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-1">

                    <div class="h-titles h-navs">
                        <a :href="next.blog_url">
      						<span class="nav-arrow splitting-text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
      							Next Article
                  </span>
                            <span class="h-title splitting-text-anim-2 scroll-animate" data-splitting="chars" data-animate="active">
      							{{ next.title }}
                  </span>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>
<script setup>

import moment from 'moment';

const { blog,next } = defineProps(['blog','next']);
</script>

