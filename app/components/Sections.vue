<script setup lang="ts">
const props = defineProps<{
  subtitle: string
  title: string
}>()
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h4 class="title">
            <span class="theme-gradient">
              {{subtitle}}
            </span>
          </h4>
          <h6 class="title mb--30">
            {{title}}
          </h6>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>