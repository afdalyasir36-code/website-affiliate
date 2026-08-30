import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.string(),
    rating: z.number().min(1).max(5),
    affiliateLink: z.string().url(),
    affiliatePlatform: z.string(),
  }),
});

export const collections = { blog };