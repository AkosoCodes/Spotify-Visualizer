<script>
import { useUserStore } from '../stores/UserStore.js'
import { storeToRefs } from 'pinia'
import { catchErrors } from '../utils.js'


export default {
    name: 'Profile',
    setup() {

        const store = useUserStore();
        const { profile } = storeToRefs(store);
        return {
            store,
            profile,
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
    
    <div class="w-[250px] mx-auto mt-[50px]">

        <img class="rounded-full shadow-circle w-[250px]" :src="profile.images[0].url" alt="profile picture">
        <h1 class="text-center hover:text-accent cursor-pointer"><a id="bold" :href="profile.href">{{profile.display_name}}</a></h1>

        <ul class="flex">
            <li class="flex flex-col">
                <span class="text-center">{{profile.followers.total}}</span>
                <span>Followers</span>
            </li>
            <li class="flex flex-col">
                <span class="text-center">1</span>
                <span>Playlists</span>
            </li>

        </ul>
    </div>

    <button @click="logout">Log out</button>

</template>