'use client'

import { motion } from 'framer-motion'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.content}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          ✦ UX/UI Designer & Digital Media Hobbyist
        </motion.p>

        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          Hey! I&rsquo;m{' '}
          <span className={styles.name}>Hannah.</span>
        </motion.h1>

        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I&rsquo;m an aspiring UX/UI designer, researcher, and a digital media
          hobbyist who loves cats.
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <a href="#projects" className={styles.ctaPrimary}>
            See My Work
          </a>
          <a href="#about" className={styles.ctaSecondary}>
            About Me
          </a>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>scroll</span>
      </motion.div>

      {/* Decorative blobs */}
      <div className={styles.blobPink} aria-hidden="true" />
      <div className={styles.blobBlue} aria-hidden="true" />
    </section>
  )
}
