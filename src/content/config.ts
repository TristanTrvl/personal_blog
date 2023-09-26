import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    pubDate: z.date(),
    imgUrl: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
