import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { asRobotsCollection } from '@nuxtjs/robots/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    faq: defineCollection(
      asRobotsCollection({
        type: 'page',
        source: 'faq/**/*.mdx',
        schema: z.object({
          date: z.string()
        }),
      })
    ),
    privacy: defineCollection(
      asRobotsCollection({
        type: 'page',
        source: 'privacy/**/*.mdx',
        schema: z.object({
          date: z.string()
        }),
      })
    ),
    terms: defineCollection(
      asRobotsCollection({
        type: 'page',
        source: 'terms/**/*.mdx',
        schema: z.object({
          date: z.string()
        }),
      })
    ),
    extensions: defineCollection(
      asRobotsCollection({
        type: 'page',
        source: 'extensions/**/*.mdx',
        schema: z.object({
          date: z.string()
        }),
      })
    )
  }
})