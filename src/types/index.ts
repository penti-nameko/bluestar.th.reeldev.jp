export interface NewsItem {
  id: string
  tag: string
  tagEmoji: string
  title: string
  body: string
  date: string
}

export interface RaceResult {
  id: string
  position: number
  circuit: string
  car: string
  driver: string
  bestLap: string
  date: string
}

export interface LiveryItem {
  id: string
  codename: string
  car: string
  note: string
  accentColor: string
  bgClass: string
}

export interface StatItem {
  value: string
  unit: string
  label: string
}
