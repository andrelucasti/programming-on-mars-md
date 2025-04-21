<script setup lang="ts">
import type {NavigationMenuItem} from "#ui/components/NavigationMenu.vue";

const items = ref<NavigationMenuItem[]>([
    {
      label: 'Home',
      to: '#',
    },
  {
    label: 'Articles',
    to: '#articles',
  },
  {
    label: 'Labs',
    to: '#labs',
  }
])

</script>

<template>
  <UNavigationMenu :items="items" class="data-[orientation=vertical]">
  </UNavigationMenu>
</template>

<style scoped>

</style>