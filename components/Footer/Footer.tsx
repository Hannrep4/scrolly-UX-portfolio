import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <p className={styles.logo}>
            hannah<span className={styles.dot}>.</span>
          </p>
          <p className={styles.tagline}>
            Designing with curiosity. Building with care.
          </p>
        </div>

        <div className={styles.links}>
          <a
            href="https://github.com/Hannrep4"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn ↗
          </a>
        </div>

        <p className={styles.copy}>© 2025 Hannah. All rights reserved.</p>
      </div>
    </footer>
  )
}
