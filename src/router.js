import Vue from "vue";
import Router from "vue-router";
import Start from "./views/Start/Start.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Start
    },
    { path: "*",
      component: Start
    },
  ],
});
