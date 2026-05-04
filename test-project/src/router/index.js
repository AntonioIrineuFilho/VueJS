import Vue from "vue";
import VueRouter from "vue-router";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requerAuth: true },
  },

  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },

  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.meta.requerAuth && !token) {
    next("/login");
  } else {
    next();
  }
});

export default router;
