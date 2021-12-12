import type { MetaFunction } from 'remix'
import { HeroSection } from '~/components/hero-section'

export let meta: MetaFunction = () => {
  return {
    title: 'Kelas Rumah Berbagi',
    description: 'Tahun Prasekolahku',
  }
}

export default function HomePage() {
  return <HeroSection />
}
