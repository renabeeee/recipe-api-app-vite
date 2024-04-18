import { createRouter, createWebHistory } from "vue-router";
import SignupForm from "./components/signup/SignupForm.vue";
import SignoutComponent from "./components/signout/SignoutComponent.vue";
import LoginForm from "./components/login/LoginForm.vue";
import PantryIndex from "./components/pantry/PantryIndex.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: SignupForm,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupForm,
  },
  {
    path: "/login",
    name: "login",
    component: LoginForm,
  },
  {
    path: "/signout",
    component: SignoutComponent,
  },
  {
    path: "/my-pantry",
    name: "my-pantry",
    component: PantryIndex,

    beforeEnter: (to, from, next) => {
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        next();
      } else {
        next("/login");
      }
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
