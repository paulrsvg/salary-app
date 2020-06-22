import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from '../views/About.vue';
import Create from '../views/Create.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/create',
    name: 'create',
    component: Create,
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
