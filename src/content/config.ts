// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const infoCollection = defineCollection({
  schema: ({ image }) => z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: image(),
      alt: z.string(),
    }),
    // image: image(),
    author: z.string().default('HispaCón'),
    category: z.string().default('Info'),
    tags: z.array(z.string()),
    lang: z.string().optional(),
  }),
});

const teamCollection = defineCollection({
  schema: ({ image }) => z.object({
    draft: z.boolean(),
    name: z.string(),
    link: z.string().url().optional(),
    description: z.string(),
    avatar: z.object({
      src: image(),
      alt: z.string(),
    }),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'info': infoCollection,
  'team': teamCollection,
};