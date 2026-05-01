import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    status: z.string(),
    summary: z.string(),
    year: z.string(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(100),
  }),
});

export const collections = { projects };
