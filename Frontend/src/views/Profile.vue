<script>
import { useUserStore } from '../stores/UserStore.js'
import { storeToRefs } from 'pinia'
import { catchErrors } from '../utils.js'
import ArtistTile from '../components/ArtistTile.vue'
import TrackTile from '../components/TrackTile.vue'
import App from '../App.vue'


export default {
    name: 'Profile',
    setup() {
        const store = useUserStore();
        const { profile, playlists, topArtistsShort, topTracksShort} = storeToRefs(store);
        return {
            store,
            profile,
            playlists,
            topArtistsShort,
            topTracksShort
        }
    },
    methods: {
        logout() {
            this.store.logoutUser();
        },
    },
    components: {
        ArtistTile,
        TrackTile,
    },
}

</script>

<template>

    <div class="flex flex-col w-[250px] mx-auto mt-[50px]" v-if="profile !== undefined">
        <img class="rounded-full shadow-circle w-[180px] mx-auto" :src="profile.images[0].url"
            v-if="profile.images !== undefined" alt="profile picture">
        <h1 class="text-center hover:text-accent cursor-pointer"><a id="bold"
                :href="profile.href">{{profile.display_name}}</a></h1>

        <ul class="flex justify-center">
            <li class="flex flex-col mx-5">
                <span class="text-gray">Followers</span>
                <span class="text-center text-white"
                    v-if="profile.followers !== undefined">{{profile.followers.total}}</span>
            </li>
            <li class="flex flex-col mx-5">
                <span class="text-gray">Playlists</span>
                <span class="text-center text-white">{{playlists.total}}</span>
            </li>

        </ul>

        <button
            class="border-white border-2 w-[180px]  h-[40px] rounded-full my-5 mx-auto hover:bg-accent hover:border-accent text-[18px] text-white hover:text-white font-bold"
            @click="logout">
            LOGOUT
        </button>

    </div>

    <div class="flex justify-around">
        <ArtistTile :artists="topArtistsShort.items" :compact="true"></ArtistTile>

        <TrackTile :tracks="topTracksShort.items" :compact="true"></TrackTile>
    </div>


</template>