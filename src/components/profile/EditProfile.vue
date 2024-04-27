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
  </div>

  <div class="edit-profile">
    <h2>Edit Profile</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="profile.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="profile.email"
          required
          disabled
        />
      </div>
      <div class="form-group">
        <label for="bio">Bio:</label>
        <textarea id="bio" v-model="profile.bio" rows="5"></textarea>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="profile.password" />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        name: "",
        email: "",
        bio: "",
        password: "",
      },
    };
  },
  created() {
    // Fetch user data from your backend and populate the profile object
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      // Replace this with your actual logic to fetch user data
      // This is just an example
      this.profile = {
        name: "Dwight Shrute",
        email: "dshrute@dundermifflin.com",
        bio: "I love beets, bears, and Battlestar Gallactica.",
      };
    },
    handleSubmit() {
      // Submit edited profile data to your backend
      console.log("Submitting profile changes:", this.profile);
      // Implement your logic to save changes, including password update
    },
  },
};
</script>

<style scoped>
.edit-profile {
  font-family: Arial, sans-serif;
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

input[type="text"],
input[type="email"],
input[type="password"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

textarea {
  height: 100px;
}

button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

button[type="submit"]:hover {
  background-color: #3e8e41;
}

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
