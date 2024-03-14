<template>
  <div>
    <button class="signout-button" @click="handleSignout">Signout</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    handleSignout(event) {
      event.preventDefault();
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('jwt');
      window.location.href = '/';
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>
