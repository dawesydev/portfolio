<script setup>
import ProjectCard from './ProjectCard.vue'
</script>
<template>
  <section class="min-h-fit flex flex-col w-5/6 mx-14">
    <h2 class="text-4xl font-display mb-8"><span class="font-body text-emerald-400 text-2xl">01.</span> Some things I've built</h2>
    <ProjectCard title="Colourful Cities"
                 desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, omnis, totam. Adipisci asperiores assumenda ea fugit ipsa ipsam iure maiores nemo pariatur perspiciatis sed, similique sint suscipit. Ab, eveniet, repellendus."
                 demo-link="google.com"
                 :tech-stack="{framework:'Vue', lang:'TypeScript', css:'TailwindCSS'}"/>
    <ProjectCard title="Ponte"
                 desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, omnis, totam. Adipisci asperiores assumenda ea fugit ipsa ipsam iure maiores nemo pariatur perspiciatis sed, similique sint suscipit. Ab, eveniet, repellendus."
                 demo-link="google.com"/>
    <ProjectCard title="Clone Website"
                 desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, omnis, totam. Adipisci asperiores assumenda ea fugit ipsa ipsam iure maiores nemo pariatur perspiciatis sed, similique sint suscipit. Ab, eveniet, repellendus."
                 demo-link="google.com"/>
    <ProjectCard title="Perfect Score"
                 desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, omnis, totam. Adipisci asperiores assumenda ea fugit ipsa ipsam iure maiores nemo pariatur perspiciatis sed, similique sint suscipit. Ab, eveniet, repellendus."
                 demo-link="google.com"/>
    <ProjectCard title="CRUD App"
                 desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, omnis, totam. Adipisci asperiores assumenda ea fugit ipsa ipsam iure maiores nemo pariatur perspiciatis sed, similique sint suscipit. Ab, eveniet, repellendus."
                 demo-link="google.com"/>
    <ProjectCard title="API-Connected App"
                 desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, omnis, totam. Adipisci asperiores assumenda ea fugit ipsa ipsam iure maiores nemo pariatur perspiciatis sed, similique sint suscipit. Ab, eveniet, repellendus."
                 demo-link="google.com"/>
  </section>
</template>

