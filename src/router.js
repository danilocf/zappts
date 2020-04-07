import Vue from "vue";
import VueRouter from "vue-router";
import PageNotFound from "./views/PageNotFound.vue";
import SignTemplate from "./views/SignTemplate.vue";
import SignIn from "./views/SignIn.vue";

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
    redirect: "/sign/in"
  },
  {
    path: "/sign",
    component: SignTemplate,
    children: [
      {
        path: "",
        redirect: "/sign/in"
      },
      {
        path: "in",
        name: "SignIn",
        component: SignIn
      },
      {
        path: "up",
        name: "SignUp",
        component: () =>
          import(/* webpackChunkName: "sign-up" */ "./views/SignUp.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
