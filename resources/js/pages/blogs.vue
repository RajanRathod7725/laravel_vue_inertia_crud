<template>
    <section class="section section-inner started-heading">
        <div class="container">

            <!-- Heading -->
            <div class="m-titles align-center">
                <h1 class="m-title splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
                    <span> My Blogs </span>
                </h1>
                <div class="m-subtitle splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
                    <span> Recent Articles </span>
                </div>
                <p class="pb-0 mb-0">{{description}}</p>
            </div>

        </div>
    </section>

    <!-- Section - Blog -->
    <div class="section section-inner m-archive">
        <div class="container">
            <div class="blog-items row">
                <div v-for="(blog,index) in blogs.data" class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div class="archive-item">
                        <div class="image">
                            <a :href="'blog/'+blog.blog_url" target="_blank">
                                <img decoding="async" :src="blog.image" :alt="blog.title">
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
            <div class="row">
                <div class="col-12">
                    <Bootstrap5Pagination :data="pagination" :limit="5"  @pagination-change-page="getBlogs" :align="'center'" :size="'default'" />

                    <div class="v-line-left v-line-top"><div class="v-line-block"><span></span></div></div>
                </div>
            </div>
        </div>
    </div>


</template>
<script setup>

import {ref,reactive,watch,onMounted,onUnmounted,defineAsyncComponent} from 'vue';
import { Bootstrap5Pagination } from 'laravel-vue-pagination';
import moment from 'moment';

const { description } = defineProps(['description']);

const initialState = {
    is_listing : false,
};
const form = reactive({...initialState});

onMounted( () => {
    getBlogs();
});

const blogs = ref([]);
const pagination = ref([]);

async function getBlogs(page = 1)
{
    form.is_listing = true;

    await axios.post('/api/blogs', {
        page : page,
        paginate_limit : paginate_limit.value,
    }).then( (response) => {
        blogs.value = response.data.data;
        pagination.value = response.data.pagination;
        form.is_listing = false;

    }).catch((error) => {
        console.log(error);
    });
}

const paginate_limit = ref();
async function paginate_limit_update(value){
    paginate_limit.value = value;
    await getBlogs();
}

</script>
