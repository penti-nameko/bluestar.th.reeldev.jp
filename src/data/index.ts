import type { NewsItem, RaceResult, LiveryItem, StatItem } from '@/types'

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    tag: 'Race Report',
    tagEmoji: '🏆',
    title: 'ニュルブルクリンク24h — 総合2位で表彰台獲得',
    body: '過酷な気象変化の中、ドライバーチェンジのタイミングを完璧に読み切り、最終スティントで逆転。チーム史上最長のエンデュランスレースでメダルを持ち帰った。',
    date: '2026.08.10',
  },
  {
    id: 'news-2',
    tag: 'Setup Update',
    tagEmoji: '🚗',
    title: 'Porsche 911 GT3 RS セットアップノートを公開',
    body: 'メンバー限定で公開していたスパ・フランコルシャン専用セッティングをDiscordにて共有。ダウンフォースバランスの調整でセクター2が0.4秒改善。',
    date: '2026.08.05',
  },
  {
    id: 'news-3',
    tag: 'Recruitment',
    tagEmoji: '👥',
    title: '秋季ドライバー募集 — 定員4名',
    body: '第3シーズンに向けてメンバーを追加募集。DR：A以上、週2戦以上参戦できる方が対象。エントリーはDiscordから。',
    date: '2026.08.01',
  },
  {
    id: 'news-4',
    tag: 'Team News',
    tagEmoji: '📡',
    title: '新スポンサー契約締結、新カラーリングを発表予定',
    body: '国内エンジニアリングブランドとのスポンサーシップ契約が成立。次戦からリバリーにロゴが追加される。詳細は近日公開。',
    date: '2026.07.28',
  },
  {
    id: 'news-5',
    tag: 'Strategy',
    tagEmoji: '🎯',
    title: 'モンツァ戦 ピット戦略の振り返り',
    body: 'ワンストップ作戦が功を奏し、タイヤ管理で上位3台と差別化。データから見た次戦への改善ポイントをまとめた詳細レポートを投稿。',
    date: '2026.07.20',
  },
  {
    id: 'news-6',
    tag: 'Tech',
    tagEmoji: '🔧',
    title: 'テレメトリー解析ツールをチーム導入',
    body: 'レース後のデータ分析効率が大幅に向上。ブレーキングポイントとコーナリングラインの差分を可視化し、メンバー間でのフィードバックサイクルを強化。',
    date: '2026.07.15',
  },
]

export const RACE_RESULTS: RaceResult[] = [
  { id: 'r1', position: 2, circuit: 'ニュルブルクリンク GP', car: 'Ferrari 296 GT3', driver: 'KYT_Senna28', bestLap: "1'52\"784", date: '2026.08.10' },
  { id: 'r2', position: 1, circuit: 'スパ・フランコルシャン', car: 'Porsche 911 GT3 RS', driver: 'BLUESTAR_Kurai', bestLap: "1'18\"432", date: '2026.07.28' },
  { id: 'r3', position: 3, circuit: 'モンツァ', car: 'McLaren 720S GT3', driver: 'TEAMto_Riku', bestLap: "1'22\"601", date: '2026.07.20' },
  { id: 'r4', position: 1, circuit: '鈴鹿サーキット', car: 'Nissan GT-R Nismo GT3', driver: 'KYT_Senna28', bestLap: "1'44\"028", date: '2026.07.05' },
  { id: 'r5', position: 4, circuit: '富士スピードウェイ', car: 'Toyota GR86 GT', driver: 'BLUESTAR_Hana', bestLap: "1'38\"912", date: '2026.06.22' },
  { id: 'r6', position: 1, circuit: 'モナコ市街地', car: 'Ferrari 296 GT3', driver: 'BLUESTAR_Kurai', bestLap: "1'10\"543", date: '2026.06.10' },
  { id: 'r7', position: 2, circuit: 'マウント・パノラマ', car: 'Porsche 911 GT3 RS', driver: 'TEAMto_Riku', bestLap: "2'03\"771", date: '2026.05.30' },
  { id: 'r8', position: 3, circuit: 'ラグナ・セカ', car: 'McLaren 720S GT3', driver: 'KYT_Senna28', bestLap: "1'20\"338", date: '2026.05.18' },
]

export const LIVERY_ITEMS: LiveryItem[] = [
  { id: 'l1', codename: 'BLUESTAR-01 INFERNO', car: 'Ferrari 296 GT3 · メインカラー', note: '', accentColor: '#FF1E1E', bgClass: 'livery-1' },
  { id: 'l2', codename: 'BLUESTAR-02 ARCTIC', car: 'Porsche 911 GT3 RS · スパ仕様', note: '', accentColor: '#00BFFF', bgClass: 'livery-2' },
  { id: 'l3', codename: 'BLUESTAR-03 PHANTOM', car: 'McLaren 720S GT3 · ダークエディション', note: '', accentColor: '#C8A84B', bgClass: 'livery-3' },
  { id: 'l4', codename: 'BLUESTAR-04 CIRCUIT', car: 'Nissan GT-R Nismo GT3 · 鈴鹿仕様', note: '', accentColor: '#00FF88', bgClass: 'livery-4' },
  { id: 'l5', codename: 'BLUESTAR-05 NEBULA', car: 'Toyota GR86 GT · ナイトレース仕様', note: '', accentColor: '#CC00FF', bgClass: 'livery-5' },
]

export const STATS: StatItem[] = [
  { value: '47', unit: '勝', label: 'Total Wins' },
  { value: '3', unit: 'rd', label: 'Season Ranking' },
  { value: "1'18\"432", unit: '', label: 'Best Lap — Spa' },
  { value: '12', unit: '名', label: 'Active Members' },
]

export const DISCORD_URL = 'https://discord.gg/your-invite-link'
