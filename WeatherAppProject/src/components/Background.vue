<template>
    <div
        class="hero min-h-screen"
        style="background-image: url(src/images/BackgroundVUEProject.jpg)"
    >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl text-indigo-300 font-bold">
                    Weather today!
                </h1>
                <p class="mb-5 text-1xl text-indigo-300">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                </p>
                <router-link to="/WeatherPage">
                    <button class="btn btn-primary">Check the weather</button>
                </router-link>
            </div>
        </div>
    </div>
</template>
