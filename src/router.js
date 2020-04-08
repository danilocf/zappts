import Vue from "vue";
import VueRouter from "vue-router";
import PageNotFound from "@/views/PageNotFound.vue";
import SignTemplate from "@/views/SignTemplate.vue";
import SignIn from "@/views/SignIn.vue";
import Success from "@/views/Success.vue";

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
          import(/* webpackChunkName: "sign-up" */ "@/views/SignUp.vue")
      }
    ]
  },
  {
    path: "/success",
    name: "Success",
    component: Success
  }
];

const router = new VueRouter({
  // im not using history mode, because this need to be configured on the server, and im not using any
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
