<script>


export default {
    name: "ArtistTile",
    setup(props) {
        const topTenArtists = props.artists.slice(0, 10);
        return {
            topTenArtists,
        }
    },
    props: {
        artists: {
            type: Array,
            required: true,
        },
        compact: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    methods: {
        activateFilter(index) {
      this.$refs.filters[index].classList.remove('opacity-0')
      this.$refs.filters[index].classList.add('opacity-50')
    },
    deactivateFilter(index) {
      this.$refs.filters[index].classList.remove('opacity-50')
      this.$refs.filters[index].classList.add('opacity-0')

    }
    },
}

</script>

<template>
    <div v-if="compact" class="ml-[50px] w-[600px]">

        <div class="flex align-center justify-between">
            <h1 class="my-auto text-[30px] h-[40px]">Top Artists...</h1>

            <router-link to="/topArtists">
                <button class="border-white border-2 w-[130px]  h-[40px] rounded-full my-5 mx-auto hover:bg-accent hover:border-accent text-[18px] text-white hover:text-white">
                    See more...
                </button>
            </router-link>
        </div>

        <ul>
            <li class="flex w-[600px] p-2" v-for="(artist, index) in topTenArtists" :key="artist.id">
                <a href="https://www.google.com">

                    <div class="flex" @mouseover="activateFilter(index)" @mouseleave="deactivateFilter(index)">

                        <div ref="filters"
                        class="w-[60px] h-[60px] my-auto bg-black absolute rounded-full opacity-0">
                        </div>
                        <img class="w-[60px] h-[60px] my-auto object-cover object-center rounded-full"
                            :src="artist.images[0].url" alt="artist image">

                        <h1 class="my-auto mx-5 text-[20px] hover:underline">{{ artist.name }}</h1>
                    </div>
                </a>
            </li>
        </ul>


    </div>
    
    <div v-else class="m-[50px]  bg-test">

        <h1>Top Artists</h1>
    
        <div class="w-[360px] my-[20px] flex flex-row justify-between">
          <button class="text-gray text-[18px] w-[100px] hover:text-white" >All Time</button>
          <button class="text-gray text-[18px] w-[120px] hover:text-white" >Last 6 Months</button>
          <button class="text-gray text-[18px] w-[100px] hover:text-white" >Last Month</button> 
        </div>
    
    </div>

</template>