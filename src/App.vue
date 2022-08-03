<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/practice1">Practice1</RouterLink>
        <RouterLink to="/practice2">Practice2</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class="content" />
</template>

<style scoped>
header {
  position: fixed;
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  z-index: 1;
  align-items: center;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  left: 0;
  right: 0;
  top: 0;
  height: 70px;
  display: flex;
  align-items: center;
}

.wrapper {
  flex: 1;
  width: 100%;
}

.logo {
  width: 50px;
  display: block;
  margin: 0 1rem;
  height: 100%;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
}

nav a.router-link-exact-active {
  color: red;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.content {
  padding-top: 80px;
}
@media (min-width: 1024px) {
}
</style>
