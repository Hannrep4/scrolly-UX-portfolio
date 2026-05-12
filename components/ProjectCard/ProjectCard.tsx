'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Project } from '@/lib/projects'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/projects/${project.slug}`} className={styles.card}>
        <div className={styles.accent} aria-hidden="true" />
        <div className={styles.number}>{String(index + 1).padStart(2, '0')}</div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.summary}>{project.summary}</p>
        <span className={styles.cta}>
          Read case study <span aria-hidden="true">→</span>
        </span>
      </Link>
    </motion.div>
  )
}
