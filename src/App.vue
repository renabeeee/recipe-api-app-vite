<template>
  <div id="app">
    <img alt="Cookable logo" src="https://cookable-api.s3.us-west-1.amazonaws.com/Cookable.svg" width="200px">
    <router-view />
  </div>
</template>

<script>
import router from './router'; // Import the router instance
// import SignupForm from './components/SignupForm.vue';


export default {
  name: 'App',
  components: {

  },
  provide() {
    return {
      router,
    };
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
