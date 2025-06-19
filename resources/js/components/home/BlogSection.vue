<template>

    <!-- Section - Blog -->
    <section class="lui-section lui-gradient-top" id="blog-section">

        <!-- Heading -->
        <div class="lui-heading">
            <div class="container">

                <div class="m-titles align-center">
                    <h2 class="m-title splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
                        <span> Latest Blog </span>
                    </h2>
                    <div class="m-subtitle splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
                <span> my <b>Articles and Advice</b>
                </span>
                    </div>
                </div>

            </div>
        </div>

        <!-- Archive -->
        <div class="v-line v-line-right">
            <div class="container">

                <div class="blog-items row">
                    <div v-for="(blog,index) in data" class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div class="archive-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                            <div class="image">
                                <a :href="'blog/'+blog.blog_url" target="_blank">
                                    <img decoding="async" :src="blog.image" :alt="blog.title" >
                                </a>
                            </div>
                            <div class="desc">
                                <div class="category lui-subtitle">
                                    <span>{{ moment(String(blog.post_date)).format('MMM DD, YYYY') }}</span>
                                </div>
                                <h5 class="lui-title">
                                    <a :href="'blog/'+blog.blog_url" target="_blank">{{ blog.title }}</a>
                                </h5>
                                <div class="lui-text">
                                    <div class="readmore">
                                        <a :href="'blog/'+blog.blog_url" class="lnk" target="_blank">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="load-more">
                    <a :href="'blogs'" class="btn scrolla-element-anim-1 scroll-animate" data-animate="active" target="_blank">
                        <span>View Blog</span>
                    </a>
                </div>

                <div class="lui-bgtitle">
                    <span> Blog </span>
                </div>

            </div>
        </div>

    </section>

</template>


<script setup>

import {ref, reactive,defineAsyncComponent} from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup';
import VTextInput from '@/components/common/VTextInput.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import VSelect from "@/components/common/VSelect.vue";
import moment from 'moment';

const { data } = defineProps(['data']);


</script>
