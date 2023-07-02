"use client"
import { Footer, Hero, Section2 } from '@/components'
import { PageWrapper } from '@/helpers/page-wrapper'

export default function Home() {
  return (
    <PageWrapper>
      <main className="overflow-hidden">
        <Hero />
        <Section2 />
        <Footer />
      </main>
    </PageWrapper>
  )
}
