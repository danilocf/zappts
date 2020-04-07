import Vue from "vue";
import VueRouter from "vue-router";
import PageNotFound from "./views/PageNotFound.vue";
import Login from "./views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound
  },
  {
    path: "/",
    name: "Index",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "./views/Register.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
