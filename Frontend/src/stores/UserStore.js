import { defineStore } from 'pinia'

import { accessToken, logout, getCurrentUserProfile } from '../spotify.js'
import { catchErrors } from '../utils.js'


let token = accessToken;
let profile = await getCurrentUserProfile;




export const useUserStore = defineStore('UserStore', {

    state: () => {
        
        return {
            profile: profile,
            token: token,
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
        },



    }


})