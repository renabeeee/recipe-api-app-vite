<template>
 
    <router-view />
 
</template>

<script>
import router from './router';

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
