<script>
import { useUserStore } from '../stores/UserStore.js'
import { storeToRefs } from 'pinia'
import { catchErrors } from '../utils.js'
import ArtistTile from '../components/ArtistTile.vue'
import TrackTile from '../components/TrackTile.vue'
import PlaylistTile from '../components/PlaylistTile.vue'
import App from '../App.vue'


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Profile',
  components: {
    ArtistTile,
    TrackTile,
    PlaylistTile,
  },
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
}

</script>

<template>
  <div>
    <div
      v-if="profile !== undefined"
      class="flex flex-col w-[250px] mx-auto mt-[50px]"
    >
      <img
        v-if="profile.images !== undefined"
        class="rounded-full shadow-circle w-[180px] mx-auto"
        :src="profile.images[0].url"
        alt="profile picture"
      >
      <h1 class="text-center hover:text-accent cursor-pointer">
        <a
          id="bold"
          :href="profile.href"
        >{{ profile.display_name }}</a>
      </h1>
    
      <ul class="flex justify-center">
        <li class="flex flex-col mx-5">
          <span class="text-gray">Followers</span>
          <span
            v-if="profile.followers !== undefined"
            class="text-center text-white"
          >{{ profile.followers.total }}</span>
        </li>
        <li class="flex flex-col mx-5">
          <span class="text-gray">Playlists</span>
          <span class="text-center text-white">{{ playlists.total }}</span>
        </li>
      </ul>
    
      <button
        class="border-white border-2 w-[180px]  h-[40px] rounded-full my-5 mx-auto hover:bg-accent hover:border-accent text-[18px] text-white hover:text-white font-bold"
        @click="logout"
      >
        LOGOUT
      </button>
    </div>
    
    <div class="flex flex-wrap justify-around ">
      <ArtistTile
        :artists="topArtistsShort.items"
        :compact="true"
      />
      
      <TrackTile
        :tracks="topTracksShort.items"
        :compact="true"
      />

      <PlaylistTile
        :playlists="playlists.items"
        :compact="true"
      />
    </div>

    <div />
  </div>
</template>