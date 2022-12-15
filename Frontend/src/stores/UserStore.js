import { defineStore } from 'pinia'

import { accessToken, logout, getCurrentUserProfile, getCurrentUserPlaylists } from '../spotify.js'
import { catchErrors } from '../utils.js'

let token = accessToken;
let profile = await getCurrentUserProfile;
let playlists = await getCurrentUserPlaylists;

export const useUserStore = defineStore('UserStore', {

    state: () => {
        return {
            profile: profile,
            token: token,
            playlists: playlists,
        }
    },
    getters: {


    },
    actions: {

        logoutUser(){
            logout();
        },
        async fetchProfile(){
            const {data} = await getCurrentUserProfile();
            this.profile = data;

            const {playlistData} = await getCurrentUserPlaylists();
            this.playlists = playlistData;
        },
    }

})