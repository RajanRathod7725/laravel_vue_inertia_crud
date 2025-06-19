<template>

    <HeroSection :data="hiro"/>

    <ServiceSection/>

    <SkillSection/>

    <WorkSection/>

    <ResumeSection/>

    <TestimonialSection/>

    <BlogSection :data="blogs"/>

    <ContactSection/>

</template>

<script setup>

    import HeroSection from '../components/home/HeroSection.vue';
    import TestimonialSection from "../components/home/TestimonialSection.vue";
    import ContactSection from "../components/home/ContactSection.vue";
    import ServiceSection from "../components/home/ServiceSection.vue";
    import SkillSection from "../components/home/SkillSection.vue";
    import WorkSection from "../components/home/WorkSection.vue";
    import ResumeSection from "../components/home/ResumeSection.vue";
    import BlogSection from "../components/home/BlogSection.vue";

    const { hiro,blogs } = defineProps(['hiro','blogs']);

</script>
