<template>

  <div class="text-center text-accent my-20 text-5xl">Vue + Spotify App</div>

  <div v-if="!token" class="text-center">

    <button @click="greet" class="text-accent m-10">CHECK TOKEN</button>

    <button class="text-accent bg-white p-5 bg-opacity-0 hover:bg-opacity-30" @click="login">
      <a href="http://localhost:8888/login">Login with Spotify</a>
    </button>

  </div>  


  <div v-else class="text-center">

    <button @click="greet" class="text-accent m-10">CHECK TOKEN</button>

    <div  class="text-accent">Logged in!</div>

    <button class="text-accent bg-white p-5 bg-opacity-0 hover:bg-opacity-30" @click="logoutUser">
      Logout
    </button>

  </div>  

</template>

<script>

import { accessToken, logout, getCurrentUserProfile } from './spotify.js'
import { catchErrors } from './utils.js'

let token = accessToken;
let profile = await getCurrentUserProfile;


const fetchData = async () => {
    const {data} = await getCurrentUserProfile();
    let profile = data;  
}

if(token){
  catchErrors(fetchData());
}

export default {
  name: 'App',
  data() {
    return {
      token: token,
      profile: profile
    }
  },
  methods: {
    greet(){
      alert(`Token ${this.token}!`);
    },
    logoutUser(){
      logout();
    },
  }
}








</script>