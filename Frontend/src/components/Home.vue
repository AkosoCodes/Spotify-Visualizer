<template>

    <div class="w-[400px] absolute top-[40%] left-[50%] mr-[-50%] translate-x-[-50%] flex justify-center align-middle">

        <a href="https://open.spotify.com/" target="_blank">
            <img class="w-[120px] mx-auto" src="../assets/icons/Spotify_Icon_Green.png" alt="Spotify Logo">
        </a>

        <button class="bg-white h-[4%] ml-5 my-auto p-3 rounded-3xl text-[20px]" >
            <a class=" bg-white hover:text-accent font-[Circular-Bold]" href="http://localhost:8888/login">LOGIN TO SPOTIFY</a>
        </button>
    </div>

</template>

<script lang="ts">

export default {
    name: 'Home',
    setup() {
        return {
            
        }
    }
}

</script>

