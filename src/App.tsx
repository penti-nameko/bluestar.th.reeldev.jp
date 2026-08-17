import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { StatsBar } from '@/components/StatsBar'
import { NewsSection } from '@/components/NewsSection'
import { ResultsSection } from '@/components/ResultsSection'
import { LiverySection } from '@/components/LiverySection'
import { DiscordSection } from '@/components/DiscordSection'
import { Footer } from '@/components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <NewsSection />
        <ResultsSection />
        <LiverySection />
        <DiscordSection />
      </main>
      <Footer />
    </>
  )
}
