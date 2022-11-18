<script setup>
import HeroBlobs from "./HeroBlobs.vue"
import Button from "./Button.vue"

</script>
<template>
  <header class="grid grid-cols-1 grid-rows-2 min-h-screen mb-72">
    <div class="flex flex-col items-start justify-end justify-self-center mx-14 pt-4">
      <h1 class="font-display font-extrabold text-6xl"><br />Daniel Dawes<span class="text-emerald-400">.</span></h1>
      <p class="font-body text-4xl dark:text-gray-400">Your next creative <br />developer.</p>
      <p class="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Alias amet aperiam aspernatur assumenda blanditiis eveniet,
        explicabo harum in libero nam non nostrum, perferendis porro
        quae sed ullam vitae. Dolorem, iusto.</p>
      <Button>Resume</Button>
    </div>
    <HeroBlobs />
  </header>
</template>