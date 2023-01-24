import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/topArtists',
    name: 'TopArtists',
    component: () => import('../views/TopArtists.vue')
  },
  {
    path: '/topTracks',
    name: 'TopTracks',
    component: () => import('../views/TopTracks.vue')
  },
  {
    path: '/recent',
    name: 'Recent',
    component: () => import('../views/Recent.vue')
  },
  {
    path: '/playlists',
    name: 'Playlists',
    component: () => import('../views/Playlists.vue')
  },

];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
