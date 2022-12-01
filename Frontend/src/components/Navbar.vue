<script >

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

            <button v-if="!token" class="text-white px-5 bg-white bg-opacity-0 hover:bg-opacity-30 mx-2">
                <a href="http://localhost:8888/login">LOGIN</a>
            </button>

            <div v-else class="flex justify-around">

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


</template>