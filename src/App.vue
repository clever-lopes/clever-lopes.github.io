<script setup lang="ts">
import IconSun from '@/components/icons/IconSun.vue';
import { useDark, useToggle } from "@vueuse/core";
import { RouterLink, RouterView } from 'vue-router';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <header>
    <div class="py-10 flex justify-center">
      <nav class="flex w-4/5 justify-between ">
        <button type="button">Português</button>
        <button @click="toggleDark()" type="button"><IconSun /></button>
      </nav>
    </div>
  </header>

  
  <RouterView />

  <footer class="fixed left-0 bottom-0 w-full h-20 text-center max-sm:bg-white z-50">
    <hr class="bg-gray-300 w-full text-base" />
    <div class="h-full flex items-center w-full">
      <nav class="w-full flex justify-evenly">
        <RouterLink class="font-medium sm:text-xs" to="/">Home</RouterLink>
        <RouterLink class="font-medium sm:text-xs" to="/projects">Projects</RouterLink>
        <RouterLink class="font-medium sm:text-xs" to="/about">About</RouterLink>
      </nav>
    </div>
  </footer>
</template>

<style></style>
