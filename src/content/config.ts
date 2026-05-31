import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      photo: image(),
      order: z.number().default(99),
      active: z.boolean().default(true),
      note: z.string().optional(),
    }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      role: z.string(),
      quote: z.string(),
      avatar: image().optional(),
      order: z.number().default(99),
    }),
});

const programmes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/programmes' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    duration: z.string(),
    ams_funded: z.boolean().default(false),
    start_date: z.string().optional(),
    intake_status: z.enum(['open', 'closed', 'upcoming']).default('upcoming'),
    short_description: z.string(),
    order: z.number().default(99),
    // Phase 3: detail-page fields. All optional so the homepage's
    // ProgrammesSection card (which only needs title + short_description)
    // keeps working without these.
    hard_facts: z
      .object({
        start: z.string().optional(),
        end: z.string().optional(),
        schedule: z.array(z.string()).optional(),
        hours_per_week: z.string().optional(),
        format: z.string().optional(),
        self_study_hours: z.string().optional(),
        language: z.string().optional(),
        location: z.string().optional(),
        tas_number: z.string().optional(),
      })
      .optional(),
    apply_info: z
      .object({
        info_webinar: z.string().optional(),
        registration_deadline: z.string().optional(),
        mandatory_webinar: z.boolean().default(true),
      })
      .optional(),
  }),
});

const awards = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/awards' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      logo: image(),
      url: z.string().url(),
      year: z.number().optional(),
      order: z.number().default(99),
    }),
});

// Composite logo-strip images for the alumni-employer carousel.
// Editors upload a pre-composed image rather than individual partner logos
// (research-phase2 F1).
const partnerSlides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/partner-slides' }),
  schema: ({ image }) =>
    z.object({
      image: image(),
      alt: z.string().default('Alumni employer logos'),
      order: z.number().default(99),
    }),
});

// Job postings shown in the Career section. CMS-driven so Edina/Alex
// can post new openings without touching code (research-phase2 F2).
const jobs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jobs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    start_date: z.string(),
    link: z.string().url(),
    active: z.boolean().default(true),
    order: z.number().default(99),
  }),
});

// Reserved for Phase 3 (subpages). Empty in Sprint A — kept here so
// the Sveltia config can reference the schema without a missing-collection error.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    lang: z.enum(['en', 'de']).default('en'),
    description: z.string(),
    og_image: z.string().optional(),
  }),
});

export const collections = {
  team,
  testimonials,
  programmes,
  awards,
  'partner-slides': partnerSlides,
  jobs,
  pages,
};
