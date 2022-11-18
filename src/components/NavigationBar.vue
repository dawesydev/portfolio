<script setup>
import { ref } from 'vue'
import NavigationBarLogo from './NavigationBarLogo.vue'
import Button from "./Button.vue"
const showMenu = ref(false)
</script>
<template>
  <div class="relative">
    <nav class="flex p-4 border-b border-gray-900 dark:border-gray-50 justify-center items-center sticky top-0 bg-transparent bg-opacity-70">
      <div class="flex justify-between items-center w-5/6 md:justify-between">
        <NavigationBarLogo class="md:pl-24"/>
        <button @click="showMenu = !showMenu">
          <i v-if="showMenu" class="ri-close-line ri-2x"></i>
          <i v-else class="ri-menu-line ri-2x"></i>
        </button>
      </div>
    </nav>
    <div v-show="showMenu"
         class="absolute h-screen w-full bg-gray-900 opacity-95">
        <ul class="grid grid-rows-5 h-1/2 items-center text-center text-2xl">
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Resume</a></li>
        </ul>
    </div>
  </div>

</template>