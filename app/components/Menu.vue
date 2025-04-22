<script setup lang="ts">

import {type MenuItem, useMenuItemStore} from "~/store/item-menu";

const store = useMenuItemStore();
const items =  store.items;

const router = useRouter()
const scrollToSection = (item: MenuItem) => {
  if (window.location.pathname !== '/') {
    router.push('/')
  }
  
  const element = document.getElementById(item.elementId)
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    })
  }
}
</script>

<template>
  <ul class="mainmenu">
    <li v-for="item in items">
      <NuxtLink :to="item.link" @click.prevent="scrollToSection(item)" > {{ item.label }} </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>

</style>