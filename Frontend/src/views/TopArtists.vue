<script>
import Profile from './Profile.vue';
import ArtistTile from '../components/ArtistTile.vue'
import { useUserStore } from '../stores/UserStore.js'
import { storeToRefs } from 'pinia'

export default {
    name: 'TopArtists',
    components: {
        ArtistTile,
        Profile,
    },
    setup() {
       const store = useUserStore();

       const { topArtists } = storeToRefs(store);

       return {
           topArtists,
       }
    },
}
</script>
<template>
    
    
    <ArtistTile :artists="topArtists.items"></ArtistTile>
</template>