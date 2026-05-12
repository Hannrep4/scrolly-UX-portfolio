import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import { ProjectFrontmatterSchema, type ProjectFrontmatter } from './schemas'

const PROJECTS_DIR = path.join(process.cwd(), 'content', 'projects')

export type Project = ProjectFrontmatter & { content: string }

export async function getProject(slug: string): Promise<Project | null> {
  const filePath = path.join(PROJECTS_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content: body } = matter(raw)

  const parsed = ProjectFrontmatterSchema.safeParse(data)
  if (!parsed.success) return null

  const processed = await remark().use(remarkHtml).process(body)
  const content = processed.toString()

  return { ...parsed.data, content }
}

export function getAllProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return []
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace('.md', ''))
}

export async function getAllProjects(): Promise<Project[]> {
  const slugs = getAllProjectSlugs()
  const projects = await Promise.all(slugs.map(getProject))
  return projects.filter(Boolean) as Project[]
}
