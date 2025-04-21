<script lang="ts">
export default defineComponent({
  name: "Breadcrumb",
  props: {
    title: {type: String, required: true},
    subTitle: {type: String, required: false},
  }
})
</script>

<template>
    <div class="breadcrumb-area breadcarumb-style-1 pt--180 pb--100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-inner text-center">
              <h3 class="title h3">{{title}}</h3>
              <h4 class="sub-title">{{subTitle}}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<style scoped>

</style>