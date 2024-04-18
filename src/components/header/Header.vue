<template>
  <div class="logo" style="float: left">
    <a href="http://localhost:5173">
      <img
        src="https://cookable-api.s3.us-west-1.amazonaws.com/Cookable.svg"
        alt="Logo"
        width="180"
      />
    </a>
  </div>
  <ul class="nav justify-content-end">
    <div class="welcome-msg">
      <p>{{ userFirstName }}'s Dashboard</p>
    </div>
    <li class="nav-item">
      <a
        class="nav-link"
        style="color: #051789; font-weight: bold"
        aria-current="page"
        href="#"
      >
        Home
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" style="color: #051789; font-weight: bold" href="#">
        Signout
      </a>
    </li>
    <div class="user-info">
      <img
        src="https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg"
        alt="User Avatar"
      />
    </div>
  </ul>
  <div class="key">
    <div class="key-red-box">
      <img
        src="https://cookable-api.s3.us-west-1.amazonaws.com/blue-box.svg"
        alt="Blue Box"
        width="12"
        height="12"
        style="margin-right: 5px"
      />
      Add ingredient
    </div>
    <img
      src="https://cookable-api.s3.us-west-1.amazonaws.com/red-box.svg"
      alt="Red Box"
      width="14"
      height="14"
      style="margin-right: 5px"
    />
    Remove ingredient
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userFirstName: null,
    };
  },

  mounted() {
    this.fetchUserFirstName();
  },

  methods: {
    fetchUserFirstName() {
      axios
        .get("http://localhost:3000/users/username.json", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
        .then((response) => {
          this.userFirstName = response.data.first_name;
        })
        .catch((error) => {
          console.error("Error fetching user info:", error);
        });
    },
  },
};
</script>

<style>
.logo {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  display: inline-block;
}
.nav {
  margin: 0 auto;
  padding: 2rem;
}

.user-info img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 0px;
  margin-right: 20px;
  float: right;
}

.welcome-msg {
  color: #333;
  display: inline-block;
  margin-top: 10px;
  margin-right: 10px;
}
</style>
