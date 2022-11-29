<template>
    <div class="text-center text-accent my-20 text-5xl">Vue + Spotify App</div>

    <div class="text-center">
      <button class="text-accent bg-white p-5 bg-opacity-0 hover:bg-opacity-30">
        <a href="http://localhost:8888/login">Login with Spotify</a>
      </button>
    </div>  

</template>

<script lang="ts">

    export default{
        name: "Home",
        methods: {

        }
    }

    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);

    let accessToken = urlParams.get('access_token');
    let refreshToken = urlParams.get('refresh_token');


</script>