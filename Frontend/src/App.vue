<template>

  <Home v-if="!status"></Home>

  <div v-else class="ml-[120px]">

    <Navbar/> 
    <Profile/>

  </div>



  

</template>

<script>

import Home from './components/Home.vue';
import Navbar from './components/Navbar.vue';
import Profile from './components/Profile.vue';
import {ref} from 'vue'

import { useUserStore } from './stores/UserStore.js'
import { storeToRefs } from 'pinia'
import { catchErrors } from './utils.js'


export default {
  name: 'App',
  setup() {

    const store = useUserStore();
    const { token, profile, playlists } = storeToRefs(store);

    let status = store.isLoggedIn;

    if(token){
      catchErrors(store.fetchProfile());
    }
    console.log("This is the token:", token)

    return {
      profile,
      playlists,
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
