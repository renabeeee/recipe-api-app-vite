<template>
  <div class="logo" style="float: left">
    <img
      src="https://cookable-api.s3.us-west-1.amazonaws.com/Cookable.svg"
      alt="Logo"
      width="200"
    />
  </div>
  <ul class="nav justify-content-end">
    <div class="welcome-msg">
      <p>Welcome, Serena!</p>
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
  </ul>
</template>

<script>
export default {
  // ...
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

.welcome-msg {
  color: #333;
  font-size: 14px;
  display: inline-block;
  margin-top: 11px;
  margin-right: 10px;
}
</style>
