import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
    }),
    articles: defineCollection({
      type: 'page',
      source: 'articles/*.md',
    }),
  },
})
