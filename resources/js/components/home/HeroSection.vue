<template>

    <!-- Section - Hero Started -->
    <section class="lui-section lui-section-hero lui-gradient-top" id="started-section">
        <div class="container">

            <!-- Hero Started -->
            <div class="lui-started v-line v-line-left">
                <div class="section hero-started">
                    <div class="content scrolla-element-anim-1 scroll-animate" data-animate="active">
                        <div class="titles">
                            <div class="lui-subtitle">
    								<span> Hello, <b>my name is</b>
    								</span>
                            </div>
                            <h1 class="title splitting-text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
    								<span v-html="data.name"></span>
                            </h1>
                            <div class="label lui-subtitle"> I am <strong>{{ data.designation }}</strong>
                            </div>
                        </div>
                        <div class="description">
                            <div>
                                <p>{{ data.sort_description }}</p>
                            </div>
                            <div class="social-links">
                                <a target="_blank" rel="nofollow" :href="data.settings.LINKEDIN_LINK" v-if="data.settings.LINKEDIN_LINK!='' && data.settings.LINKEDIN_LINK!=NULL" title="LinkedIn">
                                    <i aria-hidden="true" class="fab fa-linkedin"></i>
                                </a>
                                <a target="_blank" rel="nofollow" :href="data.settings.GITHUB_LINK" v-if="data.settings.GITHUB_LINK!='' && data.settings.GITHUB_LINK!=NULL" title="Github">
                                    <i aria-hidden="true" class="fab fa-github"></i>
                                </a>
                                <a target="_blank" rel="nofollow" :href="data.settings.WHATSAPP_LINK" v-if="data.settings.WHATSAPP_LINK!='' && data.settings.WHATSAPP_LINK!=NULL" title="Whats App">
                                    <i aria-hidden="true" class="fab fa-whatsapp"></i>
                                </a>
                                <a target="_blank" rel="nofollow" :href="data.settings.X_LINK" v-if="data.settings.X_LINK!='' && data.settings.X_LINK!=NULL" title="Twitter">
                                    <i aria-hidden="true" class="fab fa-twitter"></i>
                                </a>
                                <a target="_blank" rel="nofollow" :href="data.settings.INSTAGRAM_LINK" v-if="data.settings.INSTAGRAM_LINK!='' && data.settings.INSTAGRAM_LINK!=NULL" title="Instagram">
                                    <i aria-hidden="true" class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div class="bts">
                            <a target="_blank" :href="data.resume" class="btn">
                                <span>Download CV</span>
                            </a>
                            <a href="#skills-section" class="btn-lnk"> My Skills </a>
                        </div>
                    </div>
                    <div class="slide scrolla-element-anim-1 scroll-animate" data-animate="active">
                        <img decoding="async" :src="data.profile" alt="Rajan Rathod" >
                        <span class="circle circle-1"></span>
                        <span class="circle img-1" style="background-image: url(/images/pat-1.png);"></span>
                        <span class="circle img-2" style="background-image: url(/images/pat-2.png);"></span>
                        <span class="circle img-3" style="background-image: url(/images/pat-2.png);"></span>
                        <div class="info-list">
                            <ul>
                                <li>
    									<span class="num">{{ data.total_experience }} <strong>+</strong>
    									</span>
                                    <span class="value">Years of <strong>Experience</strong>
    									</span>
                                </li>
                                <li>
                                    <span class="num">{{ data.completed_projects }}</span>
                                    <span class="value">Completed <strong>Projects</strong>
    									</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="lui-bgtitle">
                    <span> Web Developer </span>
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


    const { data } = defineProps(['data']);
</script>
