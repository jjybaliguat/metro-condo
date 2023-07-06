"use client"
import { CondoCatalog, Footer, Hero, Section2 } from '@/components'
import CustomButton from '@/components/CustomButton'
import { PageWrapper } from '@/helpers/page-wrapper'
import Link from 'next/link'

export default function Home() {
  return (
    <PageWrapper>
      <main className="relative overflow-hidden">
        <Hero />
        <CondoCatalog />
        {/* <Section2 /> */}
        <Footer />
        <Link
            href="tel:+639979112814"
            className='fixed top-0 right-[1rem] z-50 mt-[70px]'
        >
            <CustomButton
                title='Call Us Now'
                containerStyles='bg-primary text-white text-[12px] md:text-[1rem]'
            />
        </Link>
      </main>
    </PageWrapper>
  )
}
