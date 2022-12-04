<script>

import { useUserStore } from '../stores/UserStore.js'
import { storeToRefs } from 'pinia'
import { catchErrors } from '../utils.js'

export default {
    name: 'Navbar',
    setup() {

        const store = useUserStore();
        const { token, profile } = storeToRefs(store);

        console.log(profile);

        if (token) {
            catchErrors(store.fetchProfile());
        }

        return {
            profile,
            token,
            store,
        }
    },
    methods: {
        logout() {
            this.store.logoutUser();
        },
    },

}

</script>

<template>

    <div class="flex justify-between my-5 px-10">
        <a href="https://open.spotify.com/" target="_blank">
            <img class="w-[200px]" src="../assets/logos/Spotify_Logo_Green.png" alt="Spotify Logo">
        </a>

        <div class="flex justify-around">

            <div class="flex justify-around">

                <button class="text-white px-5 bg-white bg-opacity-0 hover:bg-opacity-30 mx-2" @click="logout">
                    
                    <a class="text-white px-5 hover:text-accent" :href=profile.uri target="_blank">
                        Welcome, {{ profile?.display_name }}!
                    </a>
                </button>

                <button class="text-white px-5 bg-white bg-opacity-0 hover:bg-opacity-30 mx-2" @click="logout">
                    LOGOUT
                </button>

            </div>
        </div>
    </div>


    <!-- Side Nav-Bar -->
    <div>
        <!-- <div class="w-[50px]">
            <img src="../assets/icons/Spotify_Icon_Green.png" alt="Spotify_Logo">
        </div> -->

        <!-- GitHub Icon -->
        <div class="fill-white w-[50px]">

            <a href="https://github.com/AkosoCodes/Spotify-App" target="_blank"></a>

            <svg viewBox="0 0 24 24"><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"/></svg>
        </div>

        <div id="menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

        <div id="git">

        </div>
    </div>


</template>