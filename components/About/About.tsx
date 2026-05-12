'use client'

import AnimatedReveal from '@/components/AnimatedReveal/AnimatedReveal'
import styles from './About.module.css'

const tools = [
  { name: 'Figma', emoji: '🎨', color: '#7B61FF' },
  { name: 'Photoshop', emoji: '🖼️', color: '#31A8FF' },
  { name: 'Illustrator', emoji: '✏️', color: '#FF9A00' },
  { name: 'VS Code', emoji: '💻', color: '#007ACC' },
  { name: 'React', emoji: '⚛️', color: '#61DAFB' },
  { name: 'Canva', emoji: '🎭', color: '#00C4CC' },
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.dotBg} aria-hidden="true" />

      <div className={styles.container}>
        <AnimatedReveal>
          <p className={styles.sectionLabel}>✦ About Me</p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <h2 className={styles.heading}>
            Designing for the{' '}
            <span className={styles.accent}>human in the room.</span>
          </h2>
        </AnimatedReveal>

        <div className={styles.body}>
          <AnimatedReveal delay={0.2}>
            <p className={styles.bio}>
              I&rsquo;m a UX/UI design student passionate about creating digital
              experiences that feel intuitive, accessible, and a little bit
              delightful. I move through the full design process — research,
              wireframing, prototyping, testing — always keeping real people at
              the center.
            </p>
            <p className={styles.bio}>
              Outside of my studies, I am an avid baker, pianist, and illustrator
              continuously looking for ways to improve my current skills. I am often
              found deep in recipe blogs, fervently playing a song on my piano, or
              hard at work on another drawing. These passions make up the core of my
              being, shaping me into an individual who is eager to learn new things
              and celebrates self-growth.
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.3}>
            <div className={styles.linksRow}>
              <a
                href="https://github.com/Hannrep4"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.profileLink}
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/hannah-repuyan"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.profileLink} ${styles.profileLinkBlue}`}
              >
                LinkedIn ↗
              </a>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.4}>
            <p className={styles.toolsLabel}>Tools & Technologies</p>
            <div className={styles.toolsGrid}>
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className={styles.tool}
                  style={{ '--tool-color': tool.color } as React.CSSProperties}
                >
                  <span className={styles.toolEmoji} aria-hidden="true">
                    {tool.emoji}
                  </span>
                  <span className={styles.toolName}>{tool.name}</span>
                </div>
              ))}
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  )
}
