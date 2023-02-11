<script>
import WeatherText from './WeatherText.vue';
export default {
  components: {
    WeatherText,
  },
};
</script>

<template>
  <div
    class="hero min-h-screen"
    style="background-image: url(images/BackgroundVUEProject.jpg)"
  >
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="images/StockholmFrontPagePicture.jpg" alt="Stockholm" />
          </figure>
          <div class="card-body text-start">
            <WeatherText />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
