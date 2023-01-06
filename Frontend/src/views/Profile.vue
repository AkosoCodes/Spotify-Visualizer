<script>
import { useUserStore } from '../stores/UserStore.js'
import { storeToRefs } from 'pinia'
import { catchErrors } from '../utils.js'
import ArtistTile from '../components/ArtistTile.vue'


export default {
    name: 'Profile',
    setup() {
        const store = useUserStore();
        const { profile, playlists, topArtists } = storeToRefs(store);

        return {
            store,
            profile,
            playlists,
            topArtists,
        }
    },
    methods: {
        logout() {
            this.store.logoutUser();
        },
    },
    components: {
        ArtistTile,
    },
}

</script>

<template>

    <div class="w-[250px] mx-auto mt-[50px]" v-if="profile !== undefined">
        <img class="rounded-full shadow-circle w-[250px]" :src="profile.images[0].url" v-if="profile.images !== undefined" alt="profile picture">
        <h1 class="text-center hover:text-accent cursor-pointer"><a id="bold" :href="profile.href">{{profile.display_name}}</a></h1>

        <ul class="flex justify-center">
            <li class="flex flex-col mx-5">
                <span class="text-gray">Followers</span>
                <span class="text-center text-white" v-if="profile.followers !== undefined">{{profile.followers.total}}</span>
            </li>
            <li class="flex flex-col mx-5">
                <span class="text-gray">Playlists</span>
                <span class="text-center text-white">{{playlists.total}}</span>
            </li>

        </ul>
    </div>

    <ArtistTile></ArtistTile>


    <button @click="logout">Log out</button>

</template>