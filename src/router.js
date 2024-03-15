import { createRouter, createWebHistory } from "vue-router";
import SignupForm from "./components/SignupForm.vue";
import LoginForm from "./components/LoginForm.vue";

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
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
