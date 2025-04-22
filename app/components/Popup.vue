<script setup lang="ts">
import {useTogglePopupStore} from "~/store/toggle-popup-menu-mobile";
const mobileStore = useTogglePopupStore();
const isActive = computed(() => mobileStore.toggleMenu)

function closeMenu(){
  mobileStore.closeMenu()
}
</script>

<template>
  <div :class="['popup-mobile-menu', isActive && 'active']">
    <div class="inner-popup">
      <div class="header-top">
        <Logo />
        <div class="close-menu">
          <button class="close-button" @click="closeMenu">
            <i class="fa-sharp fa-regular fa-x"></i>
          </button>
        </div>
      </div>

      <div class="content">
        <Menu @click="closeMenu"/>

        <br>
        <div class="header-btn d-block d-md-flex">
          <!-- <MemberArea class="btn-default @@btnClass"></MemberArea>-->
        </div>

      </div>
    </div>
  </div>
</template>