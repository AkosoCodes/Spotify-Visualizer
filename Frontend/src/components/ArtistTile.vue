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
            this.$refs.filters[index].classList.add('opacity-75')
        },
        deactivateFilter(index) {
            this.$refs.filters[index].classList.remove('opacity-75')
            this.$refs.filters[index].classList.add('opacity-0')

        }
    },
    data() {
        return {
            selectedOption: 'all_time',
        }
    }
}

</script>

<template>
    <div v-if="compact" class="ml-[50px] w-[600px]">

        <div class="flex align-center justify-between">
            <h1 class="my-auto text-[30px] h-[40px]">Top Artists...</h1>

            <router-link to="/topArtists">
                <button
                    class="border-white border-2 w-[130px]  h-[40px] rounded-full my-5 mx-auto hover:bg-accent hover:border-accent text-[18px] text-white hover:text-white">
                    See more...
                </button>
            </router-link>
        </div>

        <ul>
            <li class="flex w-[600px] p-2" v-for="(artist, index) in topTenArtists" :key="artist.id">
                <a href="https://www.google.com">

                    <div class="flex" @mouseover="activateFilter(index)" @mouseleave="deactivateFilter(index)">

                        <div ref="filters" class="w-[60px] h-[60px] my-auto bg-black absolute rounded-full opacity-0">
                        </div>
                        <img class="w-[60px] h-[60px] my-auto object-cover object-center rounded-full"
                            :src="artist.images[0].url" alt="artist image">

                        <h1 class="my-auto mx-5 text-[20px] hover:underline">{{ artist.name }}</h1>
                    </div>
                </a>
            </li>
        </ul>


    </div>

    <div v-else class="m-[50px] ">

        <div class="flex justify-between">
            <h1>Top Artists</h1>

            <div class="w-[360px] my-[20px] flex flex-row justify-between">
                <button
                    v-bind:class="{ 'text-white ': selectedOption === 'all_time', ' text-[18px] w-[120px] hover:text-white': true, 'border-b-accent border-b-4': selectedOption === 'all_time', 'border-b-gray border-b-4 text-gray': selectedOption !== 'all_time' }"
                    @click="selectedOption = 'all_time'">All Time
                </button>
                <button
                    v-bind:class="{ 'text-white ': selectedOption === 'last_6_months', ' text-[18px] w-[120px] hover:text-white': true, 'border-b-accent border-b-4': selectedOption === 'last_6_months', 'border-b-gray border-b-4 text-gray': selectedOption !== 'last_6_months' }"
                    @click="selectedOption = 'last_6_months'">Last 6 Months
                </button>
                <button
                    v-bind:class="{ 'text-white ': selectedOption === 'last_month', ' text-[18px] w-[120px] hover:text-white': true, 'border-b-accent border-b-4': selectedOption === 'last_month', 'border-b-gray border-b-4 text-gray': selectedOption !== 'last_month' }"
                    @click="selectedOption = 'last_month'">Last Month
                </button>
    
            </div>
        </div>


        <ul class="flex flex-wrap justify-between">
            <li class="m-[20px] flex flex-col" v-for="(artist, index) in topTenArtists" :key="artist.id">

                <div class="flex" @mouseover="activateFilter(index)" @mouseleave="deactivateFilter(index)">
                    <div ref="filters" class="w-[200px] h-[200px] my-auto bg-black absolute rounded-full opacity-0 flex justify-center align-middle">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="fill-white bg-inherit opacity-100 m-auto" width="45.999px" height="45.999px" viewBox="0 0 45.999 45.999" xml:space="preserve"><path d="M39.264,6.736c-8.982-8.981-23.545-8.982-32.528,0c-8.982,8.982-8.981,23.545,0,32.528c8.982,8.98,23.545,8.981,32.528,0 C48.245,30.281,48.244,15.719,39.264,6.736z M25.999,33c0,1.657-1.343,3-3,3s-3-1.343-3-3V21c0-1.657,1.343-3,3-3s3,1.343,3,3V33z M22.946,15.872c-1.728,0-2.88-1.224-2.844-2.735c-0.036-1.584,1.116-2.771,2.879-2.771c1.764,0,2.88,1.188,2.917,2.771 C25.897,14.648,24.746,15.872,22.946,15.872z"></path></svg>
                    </div>
                    <img class="w-[200px] h-[200px] my-auto object-cover object-center rounded-full"
                        :src="artist.images[0].url" alt="artist image">
                </div>
                <h1 class="my-[10px] mx-auto text-[20px] hover:underline">{{ artist.name }}</h1>
            </li>
        </ul>

    </div>

</template>