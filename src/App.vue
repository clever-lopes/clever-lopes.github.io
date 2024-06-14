<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />

  <footer class="footer">
    <div class="wrapper">
      <nav class="footer_nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Projects</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5.2rem;
  color: white;
  text-align: center;
}

.footer_nav {
  display: flex;
  justify-content: space-evenly;
}

.footer_nav a {
  text-decoration: none;
}
</style>
