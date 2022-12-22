import { defineStore } from 'pinia'

import { accessToken, logout, getCurrentUserProfile, getCurrentUserPlaylists } from '../spotify.js'
import { catchErrors } from '../utils.js'

let isLoggedIn = accessToken ? true : false;

let token = accessToken;
let profile = await getCurrentUserProfile;
let playlists = await getCurrentUserPlaylists;

export const useUserStore = defineStore('UserStore', {

    state: () => {
        return {
            profile: profile,
            token: token,
            playlists: playlists,
            isLoggedIn: isLoggedIn,
        }
    },
    getters: {


    },
    actions: {

        logoutUser(){
            logout();
            this.token = null;
        },
        async fetchProfile(){
            const {ProfileData} = await getCurrentUserProfile();
            this.profile = ProfileData;

            const {PlaylistsData} = await getCurrentUserPlaylists();
            this.playlists = PlaylistsData; 


        },
    }

})