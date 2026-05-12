'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Project } from '@/lib/projects'
import AnimatedReveal from '@/components/AnimatedReveal/AnimatedReveal'
import styles from './ProjectDetail.module.css'

interface ProjectDetailProps {
  project: Project
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className={styles.wrapper}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.grid} aria-hidden="true" />

        <div className={styles.heroInner}>
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/" className={styles.back}>
              ← Back to portfolio
            </Link>
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            className={styles.summary}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
          >
            {project.summary}
          </motion.p>

          {project.link && project.link !== '#' && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkBtn}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              View Project ↗
            </motion.a>
          )}
        </div>
      </section>

      {/* Content */}
      <section className={styles.content}>
        <AnimatedReveal>
          <div
            className={styles.prose}
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </AnimatedReveal>
      </section>

      {/* Footer nav */}
      <div className={styles.footerNav}>
        <Link href="/" className={styles.footerBack}>
          ← Back to all projects
        </Link>
      </div>
    </div>
  )
}
