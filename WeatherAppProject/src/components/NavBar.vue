<template>
    <div class="navbar bg-base-100">
        <div class="flex-1">
            <router-link to="/">
                <a class="btn btn-ghost normal-case text-xl"
                    >Lucas WeatherApp</a
                >
            </router-link>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <router-link to="/">
                        <a>Home</a>
                    </router-link>
                </li>
                <li tabindex="0">
                    <RouterLink to="WeatherPage">
                        <a> Check the weather </a>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
    <RouterView />
</template>

<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>
