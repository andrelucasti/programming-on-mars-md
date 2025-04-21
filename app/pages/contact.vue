<script setup lang="ts">
useSeoMeta({
  title: 'Contact',
  description: 'Contact',
  ogTitle: 'Programming On Mars',
  ogDescription: 'Become the software engineer able to Programming on Mars',
})
</script>

<template>
  <div class="rainbow-contact-area rainbow-section-gapTop-big mb--100 contact-area">
    <div class="container">
      <div class="row mt--40 row--15">
        <div class="col-lg-8 col-sm-12">
          <NuxtLink class="rainbow-address" to="https://www.linkedin.com/in/andre-lucastic/" target="_blank">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="50" height="50"><g fill="#ff7f50" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path></g></g></svg>
            </div>
            <div class="inner">
              <h4 class="title">Connect Now</h4>
              <p class="b2">
                For professional connections, insights, and to stay updated on my latest projects.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink class="rainbow-address" to="mailto:andrelucastic@gmail.com" target="_blank">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 32 32" fill="#ff7f50">
                <path d="M 6 7.03125 C 5.691406 7.03125 5.402344 7.089844 5.125 7.175781 L 8.039063 9.03125 L 23.960938 9.03125 L 26.875 7.175781 C 26.597656 7.089844 26.308594 7.03125 26 7.03125 Z M 4.113281 7.71875 C 3.4375 8.269531 3 9.097656 3 10.03125 L 3 23.03125 C 3 24.683594 4.347656 26.03125 6 26.03125 L 26 26.03125 C 27.652344 26.03125 29 24.683594 29 23.03125 L 29 10.03125 C 29 9.097656 28.5625 8.269531 27.886719 7.71875 L 16 15.28125 Z M 6 12.445313 L 16 18.8125 L 26 12.445313 L 26 24.03125 L 6 24.03125 Z"></path>
              </svg>
            </div>
            <div class="inner">
              <h4 class="title">Email Me</h4>
              <p class="b2">
                For more in-depth conversations or queries. I’ll do my best to get back to you as soon as possible.
              </p>
            </div>
          </NuxtLink>
        </div>
        <div class="col-lg-4 col-sm-12">
          <div class="split-inner m-3">
            <h2 class="title sal-animate" data-sal="slide-up" data-sal-duration="400" data-sal-delay="200">Let’s Connect!</h2>
            <p class="description sal-animate" data-sal="slide-up" data-sal-duration="400" data-sal-delay="300">Have a question, idea, or just want to chat about all things software and coding? I’d love to hear from you! Whether you’re interested in collaborating, have a suggestion, or simply want to say hello, there are plenty of ways to reach me.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

@media screen and (min-device-width: 1024px) {
  .contact-area {
    height: 75vh;
  }
}

</style>