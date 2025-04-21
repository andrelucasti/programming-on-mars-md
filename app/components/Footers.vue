<script setup lang="ts">
import SocialMedia from "~/components/SocialMedia.vue";
</script>

<template>
  <div class="copyright-area copyright-style-one">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-8 col-sm-12 col-12">
          <div class="copyright-left">
            <ul class="ft-menu link-hover">
              <li>
                <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/terms">Terms And Condition</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact">Contact</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-12">
            <SocialMedia />
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-12">
          <div class="copyright-right text-center text-lg-end">
            <NuxtLink to="/public" class="copyright-text">© <span>Programming On Mars </span> </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>