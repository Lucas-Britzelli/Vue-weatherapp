<script setup>
import { useCounterStore } from '@/stores/counter';
import axios from 'axios';
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
            placeholder="Search for a city"
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
          <div>
            <div class="stat">
              <div class="stat-title">
                Distance from Stockholm in a straight line
              </div>
              <div class="stat-value">{{ distance }} Km</div>
              <div class="stat-desc">
                This only works for cities with names longer than 5 characters
              </div>
            </div>
          </div>
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
      citynameandcountry: '',
      latitude1: '',
      longitude1: '',
      latitude2: 59.3326,
      longitude2: 18.0649,
    };
  },
  watch: {
    citynameandcountry: function () {
      if (this.citynameandcountry.length >= 6) {
        axios
          .get('https://api.openweathermap.org/data/2.5/weather?', {
            params: {
              q: this.citynameandcountry,
              units: 'metric',
              APPID: 'b602325b5452a333226855766056e2a3',
            },
          })
          .then((response) => {
            this.latitude1 = response.data.coord.lat;
            this.longitude1 = response.data.coord.lon;
            console.log(this.latitude1);
            console.log(this.longitude1);
          });
      } else {
        this.latitude1 = '';
        this.longitude1 = '';
      }
    },
  },
  computed: {
    distance() {
      const earthRadius = 6371;
      const lat1 = this.latitude1;
      const lat2 = this.latitude2;
      const lon1 = this.longitude1;
      const lon2 = this.longitude2;

      const calcLat = (lat2 - lat1) * (Math.PI / 180);
      const calcLon = (lon2 - lon1) * (Math.PI / 180);

      const calculations =
        Math.sin(calcLat / 2) * Math.sin(calcLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
          Math.cos((lat2 * Math.PI) / 180) *
          Math.sin(calcLon / 2) *
          Math.sin(calcLon / 2);

      const center =
        2 * Math.atan2(Math.sqrt(calculations), Math.sqrt(1 - calculations));

      const distance = earthRadius * center;
      return distance.toFixed(2);
    },
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
