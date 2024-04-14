<template>
  <div class="container">
    <div id="app" class="logo">
      <img
        alt="Cookable logo"
        src="https://cookable-api.s3.us-west-1.amazonaws.com/Cookable.svg"
        width="200px"
      />
      <router-view />
    </div>
    <div id="login">
      <div class="main">
        <h2 class="header-text">Login</h2>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
        <div class="form">
          <form @submit.prevent="handleSubmit">
            <div class="inputEmail">
              <label for="email" class="bold-label">Email:</label>
              <br />
              <input
                name="email"
                type="email"
                id="email"
                required
                class="wider-input"
              />
            </div>
            <div class="inputPassword">
              <label for="password" class="bold-label">Password:</label>
              <br />
              <input
                name="password"
                type="password"
                id="password"
                required
                class="wider-input"
              />
            </div>
            <div class="inputButton">
              <button class="submit-button" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="signout" v-if="jwt">
      <SignoutComponent @signout="handleSignout" />
    </div>
    <div class="link">
      <p>
        Need to sign up?
        <router-link to="/signup">Create an account</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import SignoutComponent from "../buttons/SignoutComponent.vue";

export default {
  name: "LoginForm",
  components: {
    // SignoutComponent,
  },
  data() {
    return {
      errors: [],
      jwt: null,
    };
  },

  created() {
    this.jwt = localStorage.getItem("jwt");
  },

  methods: {
    handleSubmit(event) {
      this.errors = [];
      const params = new FormData(event.target);
      axios
        .post("http://localhost:3000/sessions.json", params)
        .then((response) => {
          console.log(response.data);
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          event.target.reset();
          window.location.href = "/my-pantry";
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password"];
        });
    },
  },
};
</script>

<style>
.container {
  max-width: 1024px;
  padding: 40px 15px;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
