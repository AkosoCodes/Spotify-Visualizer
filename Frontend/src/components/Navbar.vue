<script>

export default {
    name: 'Navbar',
    data() {
        return {
            activeSection: 'profile',
        }
    }
}
</script>

<template>

    <!-- Side Nav-Bar -->
    <div class="bg-black fixed flex flex-col top-0 left-0 z-10 min-h-[100vh] justify-between w-[120px] shadow-med">

        <!-- Spotify Icon -->
        <div class=" w-[50px] mx-auto mt-[30px]">
            <a href="https://open.spotify.com/" target="_blank">
                <img class="bg-current" src="../assets/icons/Spotify_Icon_Green.png" alt="Spotify_Logo">
            </a>
        </div>

        <!-- Nav-Bar Buttons -->
        <ul class="flex flex-col">

            <!-- Profile -->
            <li v-bind:class="{
                'bg-accent text-white fill-white':activeSection === 'profile',
                'bg-black text-gray fill-gray hover:text-white hover:fill-white hover:bg-accent':activeSection !== 'profile',
                'h-[70px] w-full text-center flex flex-col justify-center':true}" @click="activeSection = 'profile'"
            >

                <router-link to="/profile" custom v-slot="{ navigate }">
                    <button class="bg-inherit" @click="navigate" role="link">
                        <div class="mx-auto my-auto bg-inherit text-sm">
                            <div class=" w-[20px] mx-auto bg-inherit">
                                <svg class="bg-inherit w-[20px] mb-1" viewBox="0 0 1024 1024">
                                    <path
                                        d="m730.06 679.64q-45.377 53.444-101.84 83.443t-120 29.999q-64.032 0-120.75-30.503t-102.6-84.451q-40.335 13.109-77.645 29.747t-53.948 26.722l-17.142 10.084q-29.747 19.159-51.175 57.729t-21.428 73.107 25.461 59.242 60.754 24.705h716.95q35.293 0 60.754-24.705t25.461-59.242-21.428-72.603-51.679-57.225q-6.554-4.033-18.907-10.84t-51.427-24.453-79.409-30.755zm-221.84 25.72q-34.285 0-67.561-14.873t-60.754-40.335-51.175-60.502-40.083-75.124-25.461-84.451-9.075-87.728q0-64.032 19.915-116.22t54.452-85.964 80.67-51.931 99.072-18.151 99.072 18.151 80.67 51.931 54.452 85.964 19.915 116.22q0 65.04-20.167 130.58t-53.948 116.72-81.426 83.443-98.568 32.268z">
                                    </path>
                                </svg>
                            </div>

                            Profile
                        </div>
                    </button>
                </router-link>
            </li>

            <!-- Top Artists -->
            <li v-bind:class="{
                'bg-accent text-white fill-white':activeSection === 'topArtists',
                'bg-black text-gray fill-gray hover:text-white hover:fill-white hover:bg-accent':activeSection !== 'topArtists',
                'h-[70px] w-full text-center flex flex-col justify-center':true}" @click="activeSection = 'topArtists' ">
                <router-link to="/topArtists" custom v-slot="{ navigate }">
                    <button class="bg-inherit" @click="navigate" role="link">
                        <div class="mx-auto my-auto bg-inherit text-sm">
                            <div class="w-[20px] mx-auto bg-inherit">
                                <svg class="bg-inherit w-[20px] mb-1" xmlns="http://www.w3.org/2000/svg" version="1.1"
                                    x="0px" y="0px" viewBox="0 0 47.5 47.5" xml:space="preserve">
                                    <title>Microphone</title>
                                    <g>
                                        <path
                                            d="M44.159,3.341C41.932,1.115,39.013,0,36.093,0c-2.919,0-5.838,1.114-8.064,3.341c-4.454,4.454-4.454,11.677,0,16.131     c2.227,2.227,5.146,3.341,8.064,3.341s5.839-1.114,8.066-3.341C48.613,15.019,48.613,7.796,44.159,3.341z">
                                        </path>
                                        <path
                                            d="M22.161,14.999L0.646,39.161c-0.9,1.011-0.854,2.604,0.103,3.562l1.132,1.133L1.158,44.58     c-0.477,0.477-0.477,1.256,0,1.731l0.108,0.108c0.477,0.478,1.256,0.478,1.733,0l0.723-0.724l1.055,1.055     c0.957,0.957,2.552,1.003,3.563,0.104l24.155-21.509c-2.469-0.633-4.739-1.902-6.589-3.752     C24.019,19.706,22.779,17.416,22.161,14.999z M21.02,29.268l-5.145,5.146c-0.77,0.771-2.018,0.771-2.787,0     c-0.769-0.771-0.77-2.02,0-2.787l5.145-5.146c0.77-0.771,2.018-0.771,2.787,0C21.789,27.251,21.79,28.499,21.02,29.268z">
                                        </path>
                                    </g>
                                </svg>
                            </div>

                            Top Artists
                        </div>
                    </button>
                </router-link>
            </li>

            <!-- Top Tracks -->
            <li v-bind:class="{
                'bg-accent text-white fill-white':activeSection === 'topTracks',
                'bg-black text-gray fill-gray hover:text-white hover:fill-white hover:bg-accent':activeSection !== 'topTracks',
                'h-[70px] w-full text-center flex flex-col justify-center':true}" @click="activeSection = 'topTracks'">
                <router-link to="/topTracks" custom v-slot="{ navigate }">
                    <button class="bg-inherit" @click="navigate" role="link">
                        <div class="mx-auto my-auto bg-inherit text-sm">
                            <div class="w-[20px] mx-auto bg-inherit">
                                <svg class="bg-inherit w-[20px] mb-1" version="1.1" id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 489.164 489.164"
                                    xml:space="preserve">
                                    <path
                                        d="M159.582,75.459v285.32c-14.274-10.374-32.573-16.616-52.5-16.616c-45.491,0-82.5,32.523-82.5,72.5s37.009,72.5,82.5,72.5 s82.5-32.523,82.5-72.5V168.942l245-60.615v184.416c-14.274-10.374-32.573-16.616-52.5-16.616c-45.491,0-82.5,32.523-82.5,72.5 s37.009,72.5,82.5,72.5s82.5-32.523,82.5-72.5V0L159.582,75.459z">
                                    </path>
                                </svg>
                            </div>

                            Top Tracks
                        </div>
                    </button>
                </router-link>
            </li>

            <!-- Playlists -->
            <li v-bind:class="{
                'bg-accent text-white fill-white':activeSection === 'playlists',
                'bg-black text-gray fill-gray hover:text-white hover:fill-white hover:bg-accent':activeSection !== 'playlists',
                'h-[70px] w-full text-center flex flex-col justify-center':true}" @click="activeSection = 'playlists'">
                <router-link to="/playlists" custom v-slot="{ navigate }">
                    <button class="bg-inherit" @click="navigate" role="link">
                        <div class="mx-auto my-auto bg-inherit text-sm">
                            <div class="w-[20px] mx-auto bg-inherit">
                                <svg class="bg-inherit w-[25px] mb-1" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg" fill="none">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M20 6h-6m6 4h-6m6 4h-8m8 4H4" />
                                    <path fill="currentColor" d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 0V7m0 0h2V6H8v1z" />
                                </svg>
                            </div>

                            Playlists
                        </div>
                    </button>
                </router-link>
            </li>

            <!-- Recent -->
            <li v-bind:class="{
                'bg-accent text-white fill-white':activeSection === 'recent',
                'bg-black text-gray fill-gray hover:text-white hover:fill-white hover:bg-accent':activeSection !== 'recent',
                'h-[70px] w-full text-center flex flex-col justify-center':true}" @click="activeSection = 'recent'">
                <router-link to="/recent" custom v-slot="{ navigate }">
                    <button class="bg-inherit" @click="navigate" role="link">
                        <div class="mx-auto my-auto bg-inherit text-sm">
                            <div class="w-[20px] mx-auto bg-inherit">
                                <svg class="bg-inherit w-[20px] mb-1" xmlns="http://www.w3.org/2000/svg" version="1.1"
                                    x="0px" y="0px" width="30px" height="29px" viewBox="0 0 510 510">
                                    <title>Time</title>
                                    <g>
                                        <g id="history">
                                            <path
                                                d="M267.75,12.75c-89.25,0-168.3,48.45-209.1,122.4L0,76.5v165.75h165.75    l-71.4-71.4c33.15-63.75,96.9-107.1,173.4-107.1C372.3,63.75,459,150.45,459,255s-86.7,191.25-191.25,191.25    c-84.15,0-153-53.55-181.05-127.5H33.15c28.05,102,122.4,178.5,234.6,178.5C402.9,497.25,510,387.6,510,255    C510,122.4,400.35,12.75,267.75,12.75z M229.5,140.25V270.3l119.85,71.4l20.4-33.15l-102-61.2v-107.1H229.5z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </div>

                            Recent
                        </div>
                    </button>
                </router-link>
            </li>


        </ul>

        <!-- GitHub Icon -->
        <div class="fill-gray w-[40px] mx-auto mb-[30px] hover:fill-white">

            <a href="https://github.com/AkosoCodes/Spotify-App" target="_blank">
                <svg class="bg-current" viewBox="0 0 24 24">
                    <path
                        d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z" />
                </svg>
            </a>
        </div>



    </div>


</template>
