<template></template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const jwtToken = ref(localStorage.getItem("jwt"));

    const signout = () => {
      localStorage.removeItem("jwt");
      jwtToken.value = null;

      window.location.href = "/login";
    };
    onMounted(() => {
      signout();
    });

    return {
      jwtToken,
    };
  },
};
</script>
