/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';

import _ from 'lodash';
window._ = _;

import $ from 'jquery';
window.$ = window.jQuery = $;

import { toast, updateGlobalOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
updateGlobalOptions({
    autoClose: 1000,
    style: {
      opacity: '1',
      userSelect: 'initial',
    },
});
window.toast = toast;

import '@vuepic/vue-datepicker/dist/main.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { inject } from 'vue'
window.swal = inject('$swal')
import { createPinia } from 'pinia'

import { Icon } from '@iconify/vue';

import axios from 'axios';
axios.defaults.baseURL = import.meta.VITE_API_URL;

if(localStorage.getItem("access_token")){
    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("access_token");
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}

window.axios = axios;

// pinia
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

// import VueSocialSharing from 'vue-social-sharing'

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */
// import $ from 'jquery';

/* Pages */
import home from './pages/home.vue';
app.component('home', home);

import works from './pages/works.vue';
app.component('works', works);

import blogs from './pages/blogs.vue';
app.component('blogs', blogs);

import blog_detail from './pages/blog_detail.vue';
app.component('blog_detail', blog_detail);

import about_us from './pages/about_us.vue';
app.component('about_us', about_us);

import faqs from './pages/faqs.vue';
app.component('faqs', faqs);

import HeaderComponent from './components/common/HeaderComponent.vue';
app.component('header-component', HeaderComponent);

/* Components */

app.component('Icon',Icon);
app.use(pinia)
.use(VueSweetalert2)
// app.use(VueSocialSharing)
.mount('#app');

window.Swal =  app.config.globalProperties.$swal;

