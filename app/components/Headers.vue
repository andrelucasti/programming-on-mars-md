<template>
  <header class="rainbow-header header-default header-transparent header-sticky">
    <div class="container positive-relative">
      <div class="row align-items-center row--0">
        <div class="col-lg-2 col-md-6 col-6">
          <Logo />
        </div>

        <div class="col-lg-8 d-none d-lg-block">
          <nav class="mainmenu-nav d-none d-lg-flex justify-content-center">
            <Menu></Menu>
          </nav>
        </div>

        <div class="col-lg-2 col-md-6 col-6 position-static">
          <div class="header-right">

            <div class="header-btn">
              <!--              <MemberArea class="rainbow-gradient-btn"></MemberArea>-->
            </div>

            <HamburgerButton />

          </div>
        </div>

      </div>

    </div>
  </header>

  <Popup />

</template>
<script setup lang="ts">
</script>