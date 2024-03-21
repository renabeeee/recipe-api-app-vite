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
    <div class="main">
      <h2 class="header-text">Create An Account</h2>
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
      <div class="form">
        <form @submit.prevent="handleSubmit">
          <div class="inputFirstName">
            <label for="first_name" class="bold-label">First name:</label>
            <br />
            <input
              v-model="formData.first_name"
              name="first_name"
              type="text"
              id="first_name"
              required
              class="wider-input"
            />
          </div>
          <div class="inputEmail">
            <label for="email" class="bold-label">Email:</label>
            <br />
            <input
              v-model="formData.email"
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
              v-model="formData.password"
              name="password"
              type="password"
              id="password"
              required
              class="wider-input"
            />
          </div>
          <div class="inputButton">
            <button class="submit-button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
    <div class="link">
      <p>
        Already have an account?
        <router-link to="/login">Login</router-link>
        here
      </p>
    </div>
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
        password: "",
      },
      errors: [],
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
          if (
            error.response &&
            error.response.data &&
            error.response.data.errors
          ) {
            console.log(error.response.data.errors);
            this.errors = error.response.data.errors;
          } else {
            console.error("An unexpected error occurred:", error);
          }
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

.header-text {
  font-size: 24px;
  color: #333;
  font-weight: bold;
  margin-top: 60px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
}

.inputFirstName,
.inputEmail,
.inputPassword,
.inputButton,
.link {
  margin-top: 20px;
}

.wider-input {
  width: 350px;
  margin-top: 10px;
}

.bold-label {
  font-weight: bold;
}

.inputEmail {
  display: inline-block;
  text-align: left;
}

.inputFirstName input,
.inputEmail input,
.inputPassword input {
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 4px;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inputFirstName,
.inputEmail,
.inputPassword {
  margin-bottom: 15px;
}

.inputButton button {
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
}

.inputButton {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.link a {
  color: #333;
  text-decoration: none;
  font-weight: bold;
}

.link {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.link a:hover {
  color: #666;
}
</style>
