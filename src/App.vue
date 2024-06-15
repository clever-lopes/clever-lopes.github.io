<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import IconSun from '@/components/icons/IconSun.vue'
</script>

<template>
  <header>
    <div class="py-10 flex justify-center">
      <nav class="flex w-4/5 justify-between">
        <button type="button">Português</button>
        <button type="button"><IconSun /></button>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer class="fixed left-0 bottom-0 w-full h-20 text-white text-center">
    <div class="wrapper">
      <nav class="flex justify-evenly">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Projects</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </footer>
</template>

<style></style>
