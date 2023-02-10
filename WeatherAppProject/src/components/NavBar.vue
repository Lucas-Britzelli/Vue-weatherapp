<script setup>
    import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
    <div class="navbar bg-base-100">
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl">Lucas WeatherApp</a>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                <li tabindex="0">
                    <a> Check the weather </a>
                </li>
            </ul>
        </div>
    </div>
    <RouterView/>
</template>
