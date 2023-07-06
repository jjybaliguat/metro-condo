"use client"
import { CondoCatalog, Footer, Hero, Section2 } from '@/components'
import { PageWrapper } from '@/helpers/page-wrapper'

export default function Home() {
  return (
    <PageWrapper>
      <main className="overflow-hidden">
        <Hero />
        <CondoCatalog />
        {/* <Section2 /> */}
        <Footer />
      </main>
    </PageWrapper>
  )
}
