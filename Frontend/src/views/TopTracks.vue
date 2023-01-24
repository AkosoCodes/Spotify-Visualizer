<script>

import ErrorTile from '../components/ErrorTile.vue';
import TrackTile from '../components/TrackTile.vue';
import { useUserStore } from '../stores/UserStore.js';
import { storeToRefs } from 'pinia';

export default {
  name: 'TopTracks',
  components: {
    TrackTile,
    ErrorTile,
  },
  setup() {
    const store = useUserStore();

    const { topTracksShort, topTracksMedium, topTracksLong } = storeToRefs(store);

    return {
      topTracksShort,
      topTracksMedium,
      topTracksLong,
    }
  },
  data(){
    return {
      selectedOption: 'all_time',
    }
  }
}

</script>
<template>
  <div>
    <div class="flex justify-between m-[50px]">
      <h1>Top Tracks</h1>
        
      <div class="w-[360px] my-[20px] flex flex-row justify-between">
        <button
          :class="{ 'text-white ': selectedOption === 'all_time', ' text-[18px] w-[120px] hover:text-white': true, 'border-b-accent border-b-4': selectedOption === 'all_time', 'border-b-gray border-b-4 text-gray': selectedOption !== 'all_time' }"
          @click="selectedOption = 'all_time'"
        >
          All Time
        </button>
        <button
          :class="{ 'text-white ': selectedOption === 'last_6_months', ' text-[18px] w-[120px] hover:text-white': true, 'border-b-accent border-b-4': selectedOption === 'last_6_months', 'border-b-gray border-b-4 text-gray': selectedOption !== 'last_6_months' }"
          @click="selectedOption = 'last_6_months'"
        >
          Last 6 Months
        </button>
        <button
          :class="{ 'text-white ': selectedOption === 'last_month', ' text-[18px] w-[120px] hover:text-white': true, 'border-b-accent border-b-4': selectedOption === 'last_month', 'border-b-gray border-b-4 text-gray': selectedOption !== 'last_month' }"
          @click="selectedOption = 'last_month'"
        >
          Last Month
        </button>
      </div>
    </div>
        
    <TrackTile
      v-if="selectedOption === 'last_month'"
      :tracks="topTracksShort.items"
    />
    <TrackTile
      v-else-if="selectedOption === 'last_6_months'"
      :tracks="topTracksMedium.items"
    />
    <TrackTile
      v-else-if="selectedOption === 'all_time'"
      :tracks="topTracksLong.items"
    />
    <ErrorTile v-else />
  </div>
</template>