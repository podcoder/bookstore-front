import { createRouter, createWebHistory } from "vue-router";

// 1. Define route components
import HomePage from "@/views/home/HomePage.vue";
import AboutPage from "@/views/about/AboutPage.vue";
// 2. Define routes
// Each route should map to a component.
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
];

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
});

// 4. export `router` module
export default router;
