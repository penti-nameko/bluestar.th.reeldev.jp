import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.tachContainer} aria-hidden="true">
        <div className={styles.ring1} />
        <div className={styles.ring2} />
        <div className={styles.ring3} />
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className={styles.tick}
            style={{ transform: `rotate(${i * 30}deg)` }}
          />
        ))}
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>Gran Turismo 7 / シーズン2026</p>
        <h1 className={styles.title}>
          BLUESTAR<br />
          <span className={styles.accent}>TEAM</span><br />
          HUGO
        </h1>
        <p className={styles.subtitle}>Racing Team</p>
        <p className={styles.copy}>
          コーナーごとに限界を更新する。テレメトリーを読み、ラインを刻み、
          ラップタイムに証明を残す。我々は速さを哲学として走る。
        </p>
        <div className={styles.ctas}>
          <a className={styles.btnPrimary} href="#results">戦績を見る</a>
          <a className={styles.btnOutline} href="#discord">チームに参加</a>
        </div>
      </div>

      <div className={styles.scroll} aria-hidden="true">SCROLL</div>
    </section>
  )
}
