<script setup lang="ts">
import Welcome from "~/components/Welcome.vue";
useSeoMeta({
  title: 'Programming On Mars',
  description: 'Become the Software Engineer Who Can Code on Mars',
  ogTitle: 'Programming On Mars',
  ogDescription: 'Become the Software Engineer Who Can Code on Mars',
})
</script>

<template>
    <Headers></Headers>
    <Welcome></Welcome>
    <Articles class="rainbow-advance-tab-area rainbow-section-gap" />
    <Labs class="rainbow-advance-tab-area rainbow-section-gap" />
    <Footers></Footers>
</template>

