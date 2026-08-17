import { RACE_RESULTS } from '@/data'
import styles from './ResultsSection.module.css'

function PositionBadge({ pos }: { pos: number }) {
  const cls =
    pos === 1 ? styles.pos1
    : pos === 2 ? styles.pos2
    : pos === 3 ? styles.pos3
    : styles.posOther

  return <span className={`${styles.badge} ${cls}`}>{pos}</span>
}

export function ResultsSection() {
  return (
    <section className={styles.section} id="results">
      <div className={styles.container}>
        <p className={styles.label}>Season Record</p>
        <h2 className={styles.title}>戦績記録</h2>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>POS</th>
                <th>サーキット</th>
                <th>マシン</th>
                <th>ドライバー</th>
                <th>ベストラップ</th>
                <th>日付</th>
              </tr>
            </thead>
            <tbody>
              {RACE_RESULTS.map((r) => (
                <tr key={r.id}>
                  <td><PositionBadge pos={r.position} /></td>
                  <td className={styles.circuit}>{r.circuit}</td>
                  <td className={styles.car}>{r.car}</td>
                  <td>{r.driver}</td>
                  <td className={styles.lap}>{r.bestLap}</td>
                  <td className={styles.date}>{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
