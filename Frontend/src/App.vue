<template>

  <Home v-if="!status"></Home>

  <div v-else class="ml-[120px]">

    <Navbar/> 
    <router-view></router-view>
  </div>

  

  

</template>

<script>

import Home from './components/Home.vue';
import Navbar from './components/Navbar.vue';
import Profile from './views/Profile.vue';
import {ref} from 'vue'

import { useUserStore } from './stores/UserStore.js'
import { storeToRefs } from 'pinia'
import { catchErrors } from './utils.js'


export default {
  name: 'App',
  setup() {

    const store = useUserStore();
    const { token, profile, topArtists, topTracksShort } = storeToRefs(store);

    let status = store.isLoggedIn;

    if(status){
      catchErrors(store.fetchProfile());
    }

    // console log the profile 

    return {
      profile,
      topArtists,
      topTracksShort,
      store,
      status,
    }
  },
  methods: {
    logout() {
      this.store.logoutUser();
    },
  },
  components: {
    Home,
    Navbar,
    Profile,
  },
}


</script>
