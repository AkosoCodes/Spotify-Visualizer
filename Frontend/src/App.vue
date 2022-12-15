<template>

  <Home v-if="!token"></Home>

  <div v-else class="ml-[120px]">

    <Navbar/> 
    <Profile />

  </div>



  

</template>

<script>

import Home from './components/Home.vue';
import Navbar from './components/Navbar.vue';
import Profile from './components/Profile.vue';

import { useUserStore } from './stores/UserStore.js'
import { storeToRefs } from 'pinia'
import { catchErrors } from './utils.js'


export default {
  name: 'App',
  setup() {

    const store = useUserStore();
    const { token, profile, playlists } = storeToRefs(store);

    if(token){
      catchErrors(store.fetchProfile());
    }

    console.log(token)

    return {
      profile,
      playlists,
      token,
      store,
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
