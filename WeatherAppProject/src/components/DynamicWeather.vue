<script setup>
import { useCounterStore } from '@/stores/counter';
</script>

<template>
  <div
    class="hero min-h-screen"
    style="background-image: url(/images/BackgroundVUEProject.jpg)"
  >
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <div class="form-control w-full max-w-xs mb-2 mx-auto">
          <label class="label">
            <span class="label-text">What city are you in?</span>
          </label>
          <input
            type="text"
            placeholder="Stockholm"
            class="input input-bordered w-full max-w-xs"
            v-model="citynameandcountry"
          />
          <button
            class="btn btn-primary mb-5 mt-5"
            @click="getWeather(), useCounterStore().increment()"
          >
            Check the weather
          </button>
        </div>

        <div class="card w-96 bg-base-100 shadow-xl">
          <h1 v-if="weather">{{ weather.name }}, {{ weather.sys.country }}</h1>
          <div class="card-body">
            <template v-if="weather">
              <template v-for="(item, key) in weather" :key="key">
                <p v-if="key === 'main'">{{ item.temp }} &#8451;</p>
                <p v-if="key === 'weather'">
                  {{ item[0].description }}
                </p>
                <p v-if="key === 'main'">Humidity: {{ item.humidity }} %</p>
                <p v-if="key === 'wind'">Wind: {{ item.speed }} m/s</p>
                <p v-if="key === 'wind'">
                  Wind direction: {{ item.deg }} &#176;
                </p>
                <p v-if="key === 'clouds'">Clouds: {{ item.all }} %</p>
                <p v-if="key === 'main'">Pressure: {{ item.pressure }} hPa</p>
                <p v-if="key === 'visibility'">Visibility: {{ item }} m</p>
                <p v-if="key === 'coord'">
                  Geo coords: [{{ item.lon }}, {{ item.lat }}]
                </p>
                <p v-if="key === 'sys'">Sunrise: {{ item.sunrise }}</p>
                <p v-if="key === 'sys'">Sunset: {{ item.sunset }}</p>
              </template>
            </template>
            <p v-if="error">{{ error }}</p>
          </div>
        </div>
      </div>
      <div class="stats shadow flex ml">
        <div class="stat">
          <div class="stat-title">Total Amount Of Times Used</div>
          <div class="stat-value">{{ useCounterStore().count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weather: null,
      error: null,
      loading: true,
      citynameandcountry: 'Stockholm',
    };
  },

  methods: {
    async getWeather() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.citynameandcountry}&units=metric&APPID=b602325b5452a333226855766056e2a3`
        );
        this.weather = await response.json();
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
