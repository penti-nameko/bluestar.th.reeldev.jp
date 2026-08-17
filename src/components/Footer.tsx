import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <span>BLUESTAR</span> TEAMHUGO RACING
      </div>
      <p className={styles.copy}>
        © 2026 bluestar-th RACING · Gran Turismo 7 Fan Team · Not affiliated with Polyphony Digital
      </p>
    </footer>
  )
}
