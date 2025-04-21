<script setup lang="ts">
import Carousel from "~/components/Carousel.vue";
import Sections from "~/components/Sections.vue";

interface Labs {
  path: string;
  title: string;
  img: string;
}

const { data: labs } = await useAsyncData('labs', async () => {
  const articles = await queryCollection("labs").all()
  return articles.map(article => ({
    path: article.path,
    img: article.meta.image,
    title: article.title
  })) as Labs[]
})
</script>

<template>
  <Sections  id="labs" title="Join Me in the Labs" subtitle="Labs">
    <Carousel :items="labs || []" />
  </Sections>
</template>

<style scoped>

</style>