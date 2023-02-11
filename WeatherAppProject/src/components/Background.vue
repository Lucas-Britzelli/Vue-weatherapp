<script>
    import WeatherText from './WeatherText.vue'
    import FrontPageCard from '../components/FrontPageCard.vue'
    export default {
        components: {
            WeatherText,
            FrontPageCard
        }
    }
</script>
<template>
    <div
        class="hero min-h-screen"
        style="background-image: url(../src/images/BackgroundVUEProject.jpg)"
    ></div>
    <router-view></router-view>
</template>
