<script>

export default{
  name: 'PlaylistTile',
  props: {
    playlists: {
      type: Array,
      required: true,
    },
    compact: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const topFivePlaylists = props.playlists.slice(0, 5);
    return {
      topFivePlaylists,
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
    
    }
  }
}

</script>

<template>
  <div
    v-if="compact"
    class=" w-[full] m-[50px] "
  >
    <div class="flex align-center justify-center">
      <h1 class="my-auto text-[30px] h-[40px]">
        Playlists
      </h1>
    </div>

    <ul class="flex justify-left mt-[30px]">
      <li
        v-for="(playlist, index) in topFivePlaylists"
        :key="playlist.id"
        class="m-[20px] flex flex-col"
      >
        <div
          class="flex"
          @mouseover="activateFilter(index)"
          @mouseleave="deactivateFilter(index)"
        >
          <div
            ref="filters"
            class="w-[200px] h-[200px] my-auto bg-black absolute opacity-0 flex justify-center align-middle"
          />
          <img
            class="w-[200px] h-[200px] my-auto object-cover object-center "
            :src="playlist.images[0].url"
            alt="artist image"
          >
        </div>
        <h1 class="my-[10px] mx-auto text-[20px] hover:underline">
          {{ playlist.name }}
        </h1>
      </li>
    </ul>

    <router-link
      to="/playlists"
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
    class="m-[50px]"
  >
    <ul class="flex flex-wrap justify-left">
      <li
        v-for="(playlist, index) in playlists"
        :key="playlist.id"
        class="m-[20px] flex flex-col"
      >
        <div
          class="flex"
          @mouseover="activateFilter(index)"
          @mouseleave="deactivateFilter(index)"
        >
          <div
            ref="filters"
            class="w-[200px] h-[200px] my-auto bg-black absolute opacity-0 flex justify-center align-middle"
          />
          <img
            class="w-[200px] h-[200px] my-auto object-cover object-center "
            :src="playlist.images[0].url"
            alt="artist image"
          >
        </div>
        <h1 class="my-[10px] mx-auto text-[20px] hover:underline">
          {{ playlist.name }}
        </h1>
      </li>
    </ul>
  </div>
</template>