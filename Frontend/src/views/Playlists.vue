<script>

import PlaylistTile from '../components/PlaylistTile.vue'
import { useUserStore } from '../stores/UserStore.js'
import { storeToRefs } from 'pinia'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Playlists',
  components: {
    PlaylistTile
  },
  setup() {
    const store = useUserStore();

    const { playlists } = storeToRefs(store);

    return {
      playlists
    }
  }
}
</script>
<template>
  <div>
    <div class="flex justify-between m-[50px]">
      <h1>Playlists</h1>
    </div>

    <PlaylistTile
      v-if="playlists.items"
      :playlists="playlists.items"
    />
    <ErrorTile v-else />
  </div>
</template>