<template>
  <div>
    <Header />
  </div>
  <div class="index">
    <br />
    <p>Here is a list of all the ingredients you have in your pantry:</p>
  </div>
</template>

<script>
import Header from "/Users/serenagreen/recipe-api-app-vite/src/components/header/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
.index {
  max-width: 1280px;
  padding: 2rem;
}

p {
  color: #333;
  text-decoration: none;
  font-weight: bold;
}
</style>
