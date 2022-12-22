<script>


let activeTab

export default {
    name: 'Navbar',
    setup() {
        return {
        }
    },
    methods: {
    },

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
            <li class="bg-black h-[70px] w-full text-center flex flex-col justify-center text-gray fill-gray hover:text-white hover:fill-white hover:bg-accent">
                <button class="bg-inherit">
                    <div class="mx-auto my-auto bg-inherit ">
                        <div class="w-[25px] mx-auto bg-inherit">
                            <svg class="bg-inherit" viewBox="0 0 1024 1024"><path d="m730.06 679.64q-45.377 53.444-101.84 83.443t-120 29.999q-64.032 0-120.75-30.503t-102.6-84.451q-40.335 13.109-77.645 29.747t-53.948 26.722l-17.142 10.084q-29.747 19.159-51.175 57.729t-21.428 73.107 25.461 59.242 60.754 24.705h716.95q35.293 0 60.754-24.705t25.461-59.242-21.428-72.603-51.679-57.225q-6.554-4.033-18.907-10.84t-51.427-24.453-79.409-30.755zm-221.84 25.72q-34.285 0-67.561-14.873t-60.754-40.335-51.175-60.502-40.083-75.124-25.461-84.451-9.075-87.728q0-64.032 19.915-116.22t54.452-85.964 80.67-51.931 99.072-18.151 99.072 18.151 80.67 51.931 54.452 85.964 19.915 116.22q0 65.04-20.167 130.58t-53.948 116.72-81.426 83.443-98.568 32.268z"></path></svg>
                        </div>
                        
                        Profile
                    </div>

                </button>
            </li>

            <!-- Playlist -->
            <li class="bg-black h-[70px] w-full text-center flex flex-col justify-center text-gray fill-gray hover:text-white hover:fill-white hover:bg-accent">
                <button class="bg-inherit">
                    <div class="mx-auto my-auto bg-inherit ">
                        <div class="w-[25px] mx-auto bg-inherit">
                            <svg class="bg-inherit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6h-6m6 4h-6m6 4h-8m8 4H4"/><path fill="currentColor" d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 0V7m0 0h2V6H8v1z"/></svg>
                        </div>
                        
                        Playlists
                    </div>

                </button>
            </li>


        </ul>

        <!-- GitHub Icon -->
        <div class="fill-gray w-[40px] mx-auto mb-[30px] hover:fill-white">

            <a  href="https://github.com/AkosoCodes/Spotify-App" target="_blank">
                <svg class="bg-current" viewBox="0 0 24 24"><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"/></svg>
                </a>
        </div>
            


    </div>


</template>
