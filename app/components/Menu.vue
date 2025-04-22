<script setup lang="ts">
interface MenuItem{
  label: string;
  link: string;
  elementId: string;
}

const items = ref<MenuItem[]>([
    {
      label: 'Home',
      link: '/',
      elementId: '',
    },
  {
    label: 'Articles',
    link: '#articles',
    elementId: 'articles',
  },
  {
    label: 'Labs',
    link: '#labs',
    elementId: 'labs',
  }
])
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