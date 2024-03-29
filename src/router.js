import { createRouter, createWebHistory } from "vue-router";
import SignupForm from "./components/signup/SignupForm.vue";
import SignoutComponent from "./components/buttons/SignoutComponent.vue";
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
    path: "/my-pantry",
    name: "my-pantry",
    component: PantryIndex,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
