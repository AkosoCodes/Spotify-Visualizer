<script>

export default {
    name: "ArtistTile",
    props: {
        artists: {
            type: Array,
            required: true,
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
    <div class="ml-[50px]">

        <router-link to="/topArtists">
            <h1 class="p-2 text-[30px] hover:text-accent">Top Artists...</h1>
        </router-link>
        <ul>
            <li class="flex w-[500px] p-2" v-for="(artist, index) in artists.splice(0, 10)" :key="artist.id">
                <a href="https://www.google.com">

                    <div class="flex" @mouseover="activateFilter(index)" @mouseleave="deactivateFilter(index)">

                        <div ref="filters"
                        class="w-[75px] h-[75px] my-auto bg-black absolute rounded-full opacity-0">
                        </div>
                        <img class="w-[75px] h-[75px] my-auto object-cover object-center rounded-full"
                            :src="artist.images[0].url" alt="artist image">

                        <h1 class="my-auto mx-5 text-[30px] hover:underline">{{ artist.name }}</h1>
                    </div>
                </a>
            </li>
        </ul>


    </div>

</template>