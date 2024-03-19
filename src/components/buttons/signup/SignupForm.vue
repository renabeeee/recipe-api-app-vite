<template>
<div id="app">
    <img alt="Cookable logo" src="https://cookable-api.s3.us-west-1.amazonaws.com/Cookable.svg" width="200px">
    <router-view />
  </div>
  <div class="main">
    <h2 class="header-text">Create An Account</h2>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
    <p class="instructions">Please complete the below to create an account.</p>
    <form @submit.prevent="handleSubmit">
      <div class="inputFirstName">
        <label for="first_name">First name:</label>
        <input v-model="formData.first_name" name="first_name" type="text" id="first_name" required />
      </div>
      <div class="inputEmail">
        <label for="email">Email:</label>
        <input v-model="formData.email" name="email" type="email" id="email" required />
      </div>
      <div class="inputPassword">
        <label for="password">Password:</label>
        <input v-model="formData.password" name="password" type="password" id="password" required />
      </div>
      <button class="submit-button" type="submit">Submit</button>
    </form>
        <p>Already have an account? <router-link to="/login">Login</router-link> here</p>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
      },
      errors: []
    };
  },
  methods: {
    handleSubmit() {
      this.errors = [];
      const params = new FormData();
      for (let key in this.formData) {
        params.append(key, this.formData[key]);
      }
      axios
        .post("http://localhost:3000/users.json", params)
        .then((response) => {
          console.log(response.data);
          window.location.href = "http://localhost:8080/my-pantry";
        })
        .catch((error) => {
  if (error.response && error.response.data && error.response.data.errors) {
    console.log(error.response.data.errors);
    this.errors = error.response.data.errors;
  } else {
    console.error("An unexpected error occurred:", error);
  }
});

    }
  }
};
</script>

<style>
/* Add CSS styles here */
</style>
