interface TEAMps {
  accentColor: string
  label: string
}

export function CarSilhouette({ accentColor, label }: TEAMps) {
  return (
    <svg
      style={{ width: '75%', opacity: 0.85, filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.8))' }}
      viewBox="0 0 400 160"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M30 110 Q40 85 80 75 L100 40 Q120 20 200 18 Q280 20 300 40 L320 75 Q360 85 370 110 L380 120 L20 120 Z"
        fill="rgba(255,255,255,0.1)"
        stroke={accentColor}
        strokeWidth="1.5"
        strokeOpacity="0.5"
      />
      <ellipse cx="90"  cy="122" rx="28" ry="12" fill="rgba(0,0,0,0.8)" stroke={accentColor} strokeWidth="1" strokeOpacity="0.4" />
      <ellipse cx="310" cy="122" rx="28" ry="12" fill="rgba(0,0,0,0.8)" stroke={accentColor} strokeWidth="1" strokeOpacity="0.4" />
      <text
        x="190" y="90"
        textAnchor="middle"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="22"
        fill="rgba(255,255,255,0.9)"
        letterSpacing="8"
      >
        bluestar-th
      </text>
      <text
        x="190" y="110"
        textAnchor="middle"
        fontFamily="'Share Tech Mono', monospace"
        fontSize="10"
        fill={accentColor}
        fillOpacity="0.9"
        letterSpacing="4"
      >
        {label}
      </text>
    </svg>
  )
}
