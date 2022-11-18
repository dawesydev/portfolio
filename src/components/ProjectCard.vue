<script setup>

defineProps({
  id: Number,
  title: String,
  desc: String,
  demoLink: String,
  gHubLink: String
})

</script>
<template>
  <div class="p-4 my-6 border-2 border-emerald-400">
    <h3 class="text-2xl mb-2">{{ title }}</h3>
    <p class="dark:text-gray-400 mb-6"> {{ desc }} </p>
    <div class="flex justify-between items-center">
      <a href="{{gHubLink}}"
         class="text-emerald-400 mr-2 hover:animate-jump">
        <i class="ri-github-fill ri-xl"></i>
      </a>
      <ul class="flex space-x-6 text-emerald-400">
        <li>Vue</li>
        <li>TypeScript</li>
        <li>TailwindCSS</li>
      </ul>
      <a href="{{demoLink}}"
         class="text-emerald-400 hover:animate-jump">
        <i class="ri-global-line ri-xl"></i>
      </a>
    </div>
  </div>
</template>