<template>
  <div class="WeatherPage">
    <NavBar />
    <div class="WeatherPage-content">
      <DynamicWeather />
    </div>
  </div>
</template>
<script>
import NavBar from '../components/NavBar.vue';
import DynamicWeather from '../components/DynamicWeather.vue';
export default {
  components: {
    NavBar,
    DynamicWeather,
  },
};
</script>
