<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink style="padding-left: 5px;" to="/about">About</RouterLink>
  </nav>

  <div class="box">
    <RouterView />
  </div>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding-block: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
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

@media (min-width: 1024px) {
  nav {
    text-align: left;
    font-size: 1rem;
    padding-top: 1rem;
  }
}
</style>

