import { defineStore } from 'pinia'

import { accessToken, logout, getCurrentUserProfile, getCurrentUserPlaylists, getTopArtistsLong, getTopArtistsMedium, getTopArtistsShort} from '../spotify.js'
import { catchErrors } from '../utils.js'

let isLoggedIn = accessToken ? true : false;

let token = accessToken;
let profile = await getCurrentUserProfile;
let playlists = await getCurrentUserPlaylists;
let topArtistsShort = await getTopArtistsShort;
let topArtistsMedium = await getTopArtistsMedium;
let topArtistsLong = await getTopArtistsLong;

export const useUserStore = defineStore('UserStore', {

    state: () => {
        return {
            profile: profile,
            token: token,
            playlists: playlists,
            isLoggedIn: isLoggedIn,
            topArtistsShort: topArtistsShort,
            topArtistsMedium: topArtistsMedium,
            topArtistsLong: topArtistsLong,
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

            const userTopArtistShort = await getTopArtistsShort();
            this.topArtistsShort = userTopArtistShort.data;

            const userTopArtistMedium = await getTopArtistsMedium();
            this.topArtistsMedium = userTopArtistMedium.data;

            const userTopArtistLong = await getTopArtistsLong();
            this.topArtistsLong = userTopArtistLong.data;

            
        },
    }

})