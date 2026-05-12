import { z } from 'zod'

export const ProjectFrontmatterSchema = z.object({
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  link: z.string(),
})

export type ProjectFrontmatter = z.infer<typeof ProjectFrontmatterSchema>
