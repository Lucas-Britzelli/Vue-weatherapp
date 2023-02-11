<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
  <h1 class="card-title text-end">Weather in Stockholm today!</h1>
  <p class="text-bold text-1xl">Weather: {{ this.currentWeather }}</p>
  <p class="text-bold text-1xl">Temperature: {{ this.weather?.main.temp }}°C</p>
  <p class="text-bold text-1xl">
    Feels like: {{ this.weather?.main.feels_like }}°C
  </p>
</template>
<script>
export default {
  data() {
    return {
      weather: null,
      error: null,
      loading: true,
      currentWeather: null,
    };
  },
  async created() {
    try {
      const response = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=b602325b5452a333226855766056e2a3'
      );
      this.weather = await response.json();
      let ConvertObjectToArray = this.weather;
      this.currentWeather = ConvertObjectToArray.weather[0].description;
    } catch (error) {
      this.error = error;
    } finally {
      this.loading = false;
    }
  },
};
</script>
