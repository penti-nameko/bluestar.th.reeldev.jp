import { LIVERY_ITEMS } from '@/data'
import { CarSilhouette } from './CarSilhouette'
import styles from './LiverySection.module.css'

export function LiverySection() {
  return (
    <section className={styles.section} id="livery">
      <div className={styles.container}>
        <p className={styles.label}>Livery Gallery</p>
        <h2 className={styles.title}>リバリー</h2>

        <div className={styles.grid}>
          {LIVERY_ITEMS.map((livery, i) => (
            <div
              key={livery.id}
              className={`${styles.card} ${i === 0 ? styles.wide : ''}`}
            >
              <div className={styles.visual} style={{ background: liveryGradient(i) }}>
                <CarSilhouette accentColor={livery.accentColor} label={livery.id.toUpperCase()} />
              </div>
              <div className={styles.overlay}>
                <p className={styles.overlayTitle}>{livery.codename}</p>
                <p className={styles.overlaySub}>{livery.car}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function liveryGradient(index: number): string {
  const gradients = [
    'linear-gradient(135deg, #0A0A0F 0%, #1a1a2e 40%, #FF1E1E 40%, #C8A84B 70%, #FF1E1E 70%, #0A0A0F 100%)',
    'linear-gradient(160deg, #0A0A0F 0%, #1a1a2e 50%, #00BFFF 50%, #0A0A0F 100%)',
    'linear-gradient(120deg, #1a0a0a 0%, #FF1E1E 30%, #0A0A0F 30%, #C8A84B 60%, #0A0A0F 60%, #1a0a0a 100%)',
    'linear-gradient(145deg, #0a0f0a 0%, #0f3020 40%, #00FF88 40%, #0A0A0F 65%, #C8A84B 65%, #0a0f0a 100%)',
    'linear-gradient(110deg, #0A0A0F 0%, #2a0a2a 45%, #CC00FF 45%, #FF1E1E 70%, #0A0A0F 100%)',
  ]
  return gradients[index % gradients.length]
}
