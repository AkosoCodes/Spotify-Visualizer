import { defineStore } from 'pinia'

import { accessToken, logout, getCurrentUserProfile, getCurrentUserPlaylists, getTopArtistsLong, getTopArtistsMedium, getTopArtistsShort} from '../spotify.js'
import { catchErrors } from '../utils.js'

let isLoggedIn = accessToken ? true : false;

let token = accessToken;
let profile = await getCurrentUserProfile;
let playlists = await getCurrentUserPlaylists;
let topArtists = await getTopArtistsShort;

export const useUserStore = defineStore('UserStore', {

    state: () => {
        return {
            profile: profile,
            token: token,
            playlists: playlists,
            isLoggedIn: isLoggedIn,
            topArtists: topArtists,
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
            const userProfile = await getCurrentUserProfile();
            this.profile = userProfile.data;

            const userPlaylist = await getCurrentUserPlaylists();
            this.playlists = userPlaylist.data; 

            const userTopArtist = await getTopArtistsShort();
            this.topArtists = userTopArtist.data;

        },
    }

})