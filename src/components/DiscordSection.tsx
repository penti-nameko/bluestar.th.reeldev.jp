import { DISCORD_URL } from '@/data'
import { DiscordIcon } from './icons/DiscordIcon'
import styles from './DiscordSection.module.css'

export function DiscordSection() {
  return (
    <section className={styles.section} id="discord">
      <div className={styles.iconWrap}>
        <DiscordIcon className={styles.icon} />
      </div>
      <h2 className={styles.heading}>チームに参加する</h2>
      <p className={styles.sub}>
        セットアップ情報の共有、レース分析、メンバー同士のコミュニケーション。
        すべてはDiscordで動いている。
      </p>
      <a className={styles.btn} href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
        <DiscordIcon className={styles.btnIcon} />
        Discordに参加する
      </a>
    </section>
  )
}
