import { STATS } from '@/data'
import styles from './StatsBar.module.css'

export function StatsBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        {STATS.map((s) => (
          <div key={s.label} className={styles.item}>
            <div className={styles.num}>
              {s.value}
              {s.unit && <span className={styles.unit}>{s.unit}</span>}
            </div>
            <div className={styles.label}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
