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
      <router-link
        to="/signout"
        class="nav-link"
        style="color: #051789; font-weight: bold"
      >
        Signout
      </router-link>
    </li>

    <div class="user-info">
      <div class="dropdown">
        <a href="#" @click="handleImageClick">
          <img :src="userProfileImage" alt="User Avatar" />
        </a>
      </div>

      <ul class="dropdown-menu" :class="{ show: isDropdownOpen }">
        <li>
          <a
            class="dropdown-item"
            href="#"
            @click="handleDropdownSelection('Settings')"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            class="dropdown-item"
            href="#"
            @click="handleDropdownSelection('Edit Profile')"
          >
            Edit Profile
          </a>
        </li>
        <li>
          <a
            class="dropdown-item"
            href="/logout"
            @click="handleDropdownSelection('Logout')"
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  </ul>
</template>

<script>
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default {
  data() {
    return {
      userFirstName: null,
      userProfileImage: null,
      isDropdownOpen: false,
    };
  },

  mounted() {
    this.fetchUserInfo();
  },

  methods: {
    fetchUserInfo() {
      axios
        .get("http://localhost:3000/users/username.json", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
        .then((response) => {
          this.userFirstName = response.data.first_name;
          this.fetchProfileImage();
        })
        .catch((error) => {
          console.error("Error fetching user info:", error);
        });
    },
    fetchProfileImage() {
      axios
        .get("http://localhost:3000/users/profile_image.json", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
        .then((response) => {
          this.userProfileImage = response.data.profile_image;
        })
        .catch((error) => {
          console.error("Error fetching profile image:", error);
        });
    },
    handleImageClick() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    handleDropdownSelection(selection) {
      console.log("Selected:", selection);
      this.isDropdownOpen = false;
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
  margin-left: 20px;

  float: right;
}

.welcome-msg {
  color: #333;
  display: inline-block;
  margin-top: 8px;
  margin-right: 10px;
}
</style>
