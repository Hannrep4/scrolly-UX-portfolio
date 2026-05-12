'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        hannah<span className={styles.dot}>.</span>
      </Link>
      <ul className={styles.links}>
        <li>
          <a href="#about" className={styles.link}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" className={styles.link}>
            Projects
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Hannrep4"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkAccent}
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  )
}
