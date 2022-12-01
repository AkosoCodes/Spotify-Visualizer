<template>

  <Navbar/> 

  <div class="text-center text-accent my-20 text-5xl">Vue + Spotify App</div>

  <div v-if="!token" class="text-center">

    <button class="text-accent bg-white p-5 bg-opacity-0 hover:bg-opacity-30" @click="login">
      <a href="http://localhost:8888/login">Login with Spotify</a>
    </button>

  </div>


  <div v-else class="text-center">

    <div class="text-accent">Logged in!</div>

    <button class="text-accent bg-white p-5 bg-opacity-0 hover:bg-opacity-30" @click="store.logoutUser()">
      Logout
    </button>

  </div>

  <Home></Home>

</template>

<script>

import Home from './components/Home.vue';
import Navbar from './components/Navbar.vue';

import { useUserStore } from './stores/UserStore.js'
import { storeToRefs } from 'pinia'
import { catchErrors } from './utils.js'


export default {
  name: 'App',
  setup() {

    const store = useUserStore();
    const { token, profile } = storeToRefs(store);

    if(token){
      catchErrors(store.fetchProfile());
    }

    return {
      profile,
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

  },
}


</script>