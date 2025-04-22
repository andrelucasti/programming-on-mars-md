<script setup lang="ts">
import {useTogglePopupStore} from "~/store/toggle-popup-menu-mobile";

const menuMobileStore = useTogglePopupStore();

function openMenu(){
  menuMobileStore.openMenu()
}

</script>

<template>
  <div class="mobile-menu-bar ml--5 d-flex justify-content-end d-lg-none">
    <div class="hamberger">
      <button class="hamberger-button" @click="openMenu">
        <i class="fa-sharp fa-regular fa-bars"></i>
      </button>
    </div>
  </div>
</template>