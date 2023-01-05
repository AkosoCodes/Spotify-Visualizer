import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../components/Home.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../components/Profile.vue")
  }
];

const router = createRouter({
  history: createWebHistory("/"),
  routes
});

export default router;
