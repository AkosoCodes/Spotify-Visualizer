<script>

import {formatDuration} from '../utils.js'

export default {
  name: 'TrackTile',
  props: {
    tracks: {
      type: Array,
      required: true,
    },
    compact: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props){

    const topFiveTracks = props.tracks.slice(0, 5);

    return{
      topFiveTracks,
    }

  },
  methods: {
    activateFilter(index) {
      this.$refs.filters[index].classList.remove('opacity-0')
      this.$refs.filters[index].classList.add('opacity-75')
    },
    deactivateFilter(index) {
      this.$refs.filters[index].classList.remove('opacity-75')
      this.$refs.filters[index].classList.add('opacity-0')

    },
    formatDuration,
  }
}
</script>

<template>
  <div
    v-if="compact"
    class="w-[500px] mt-[30px]"
  >
    <div class="flex align-center justify-center">
      <h1 class="my-auto text-[30px] h-[40px]">
        Top Tracks
      </h1>
    </div>

    <ul class="mt-[30px]">
      <li
        v-for="(track, index) in topFiveTracks"
        :key="track.id"
        class="flex w-[600px] p-2"
      >
        <a href="https://www.google.com">

          <div
            class="flex"
            @mouseover="activateFilter(index)"
            @mouseleave="deactivateFilter(index)"
          >

            <div
              ref="filters"
              class="w-[60px] h-[60px] my-auto bg-black absolute opacity-0"
            />
            <img
              class="w-[60px] h-[60px] my-auto object-cover object-center"
              :src="track.album.images[2].url"
              alt="track image"
            >

            <div class="my-auto mx-5 flex flex-col">
              <h1 class=" text-[20px] hover:underline">{{ track.name }}</h1>

              <div class="text-[15px] text-gray">
                {{ track.artists[0].name }} -  {{ track.album.name }}
              </div>
            </div>
                        
          </div>
        </a>
      </li>
    </ul>

    <router-link
      to="/topTracks"
      class="flex justify-center"
    >
      <button
        class="border-white border-2 w-[130px]  h-[40px] rounded-full my-5 mx-auto hover:bg-accent hover:border-accent text-[18px] text-white hover:text-white"
      >
        See more...
      </button>
    </router-link>
  </div>

  <div
    v-else
    class="m-[50px] mr-[50px] "
  >
    <ul class="flex flex-wrap">
      <li
        v-for="(track, index) in tracks"
        :key="track.id"
        class="flex justify-between w-[100%] p-3 "
      >
        <a href="https://www.google.com">

          <div
            class="flex"
            @mouseover="activateFilter(index)"
            @mouseleave="deactivateFilter(index)"
          >

            <div
              ref="filters"
              class="w-[60px] h-[60px] my-auto bg-black absolute opacity-0"
            />
            <img
              class="w-[60px] h-[60px] my-auto object-cover object-center"
              :src="track.album.images[2].url"
              alt="track image"
            >

            <div class="my-auto mx-5 flex flex-col">
              <h1 class=" text-[20px] hover:underline">{{ track.name }}</h1>

              <div class="text-[15px] text-gray">
                {{ track.artists[0].name }} -  {{ track.album.name }}
              </div>
            </div>
                        
          </div>
        </a>

        <div class="my-auto mr-0 text-gray text-[20px]">
          {{ formatDuration(track.duration_ms) }}
        </div>
      </li>
    </ul>
  </div>
</template>