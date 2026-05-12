import { notFound } from 'next/navigation'
import { getProject, getAllProjectSlugs } from '@/lib/projects'
import ProjectDetail from '@/components/ProjectDetail/ProjectDetail'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = await getProject(slug)
  if (!project) return {}
  return {
    title: `${project.title} | Hannah`,
    description: project.summary,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await getProject(slug)
  if (!project) notFound()

  return (
    <>
      <Nav />
      <ProjectDetail project={project} />
      <Footer />
    </>
  )
}
