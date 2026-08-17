import { DISCORD_URL } from '@/data'
import { DiscordIcon } from './icons/DiscordIcon'
import styles from './Nav.module.css'

export function Nav() {
  return (
    <nav className={styles.nav}>
      <a className={styles.logo} href="#">
        <span>BLUESTAR</span> TEAMHUGO
      </a>
      <ul className={styles.links}>
        {(['News', 'Results', 'Livery', 'Discord'] as const).map((label) => (
          <li key={label}>
            <a href={`#${label.toLowerCase()}`}>{label}</a>
          </li>
        ))}
      </ul>
      <a className={styles.discordBtn} href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
        <DiscordIcon />
        Join Discord
      </a>
    </nav>
  )
}
