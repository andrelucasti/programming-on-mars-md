<script setup lang="ts">
const props = defineProps<{
  imageUrl: string
  title: string
  slug: string
}>()

</script>

<template>
  <div class="rainbow-card ml--5 mr--5">
    <div class="inner">
      <NuxtLink class="image" :to="slug" >
        <div class="thumbnail">
          <img :src="imageUrl" :alt="title">
        </div>
        <div class="content">
          <ul class="rainbow-meta-list">
            <li class="separator"></li>
          </ul>
          <p class="rbt-short-title">
            {{title}}
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>