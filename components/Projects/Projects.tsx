'use client'

import type { Project } from '@/lib/projects'
import AnimatedReveal from '@/components/AnimatedReveal/AnimatedReveal'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import styles from './Projects.module.css'

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.container}>
        <AnimatedReveal>
          <p className={styles.sectionLabel}>✦ Featured Work</p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <h2 className={styles.heading}>
            Projects that tell a story.
          </h2>
        </AnimatedReveal>

        <AnimatedReveal delay={0.2}>
          <p className={styles.subheading}>
            Each project represents a real design challenge I worked through —
            from research to prototype.
          </p>
        </AnimatedReveal>

        <div className={styles.cards}>
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
