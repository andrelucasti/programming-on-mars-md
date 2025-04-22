<script setup lang="ts">
const authors = [
  {
    name: 'Andre Lucas',
    bio: 'Andre Lucas is a software engineer at ProgrammingOnMars'
  }
]
const props = defineProps<{
  date: string
  title: string
  image: string
  tags: string[]
}>()
</script>

<template>
  <Headers></Headers>
  <div class="main-content">

  </div>
  <div class="rainbow-blog-section rainbow-section-gap-big bg-color-1 ">
    <div class="container">

      <div class="row row--30">
        <div class="col-lg-1">
        </div>
        <div class="col-lg-10">
          <div class="rainbow-blog-details-area">
            <div class="post-page-banner">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="content text-center">
                      <ul class="rainbow-meta-list">
                        <li v-for="author in authors">
                          <i class="feather-user"></i>
                          <a href="#"> {{author.name}} </a>
                        </li>
                        <li>
                          <i class="feather-calendar"></i>
                          {{date}}
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="blog-details-content pt--40">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="content">

                      <slot :use="$slots.default"></slot>

                      <div class="category-meta">
                        <span class="text">Tags: </span>
                        <div class="tagcloud">
                          <a href="#" v-for="tag in tags">{{tag}}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div class="col-lg-1">
        </div>
      </div>
    </div>
  </div>
  <Footers></Footers>
</template>