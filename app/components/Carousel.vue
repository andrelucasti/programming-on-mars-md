<script setup lang="ts">
import CarouselItem from "~/components/CarouselItem.vue";

interface CarouselContent {
  path: string;
  title: string;
  img: string;
}

const props = defineProps<{
  items: CarouselContent[]
}>()

</script>


<template>
  <UCarousel v-slot="{ item }"
             arrows
             dots
             :items="items"
             :ui="{
               item: 'basis-1/3' ,
             }">

    <CarouselItem :title="item.title" :image-url="item.img" :slug="item.path" class="mx-auto" />

  </UCarousel>
</template>

<style scoped>

</style>