import { NEWS_ITEMS } from '@/data'
import styles from './NewsSection.module.css'

export function NewsSection() {
  return (
    <section className={styles.section} id="news">
      <div className={styles.container}>
        <p className={styles.label}>Latest Updates</p>
        <h2 className={styles.title}>チームニュース</h2>
        <div className={styles.grid}>
          {NEWS_ITEMS.map((item) => (
            <article key={item.id} className={styles.card}>
              <p className={styles.tag}>
                {item.tagEmoji} {item.tag}
              </p>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.body}>{item.body}</p>
              <time className={styles.date} dateTime={item.date}>
                {item.date}
              </time>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
