import { Hero, Section2 } from '@/components'
import { PageWrapper } from '@/components/page-wrapper'

export default function Home() {
  return (
    <PageWrapper>
      <main className="overflow-hidden">
        <Hero />
        <Section2 />
      </main>
    </PageWrapper>
  )
}
