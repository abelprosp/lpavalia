import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { AddressSearch } from '../components/AddressSearch'
import { HowItWorks } from '../components/HowItWorks'
import { AppShowcase } from '../components/AppShowcase'
import { FAQ } from '../components/FAQ'
import { Footer } from '../components/Footer'
import { StickyBar } from '../components/StickyBar'

export function HomePage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Hero />
        <AddressSearch />
        <HowItWorks />
        <AppShowcase />
        <FAQ />
      </main>
      <Footer />
      <StickyBar />
    </>
  )
}
