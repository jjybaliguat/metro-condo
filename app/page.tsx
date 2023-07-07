"use client"
import { CondoCatalog, Contact, Faqs, Footer, Hero, Section3 } from '@/components'
import CustomButton from '@/components/CustomButton'
import { PageWrapper } from '@/helpers/page-wrapper'
import Link from 'next/link'

export default function Home() {
  return (
    <PageWrapper>
      <main className="relative overflow-hidden">
        <Hero />
        <CondoCatalog />
        <Section3 />
        <Faqs />
        <Contact />
        <Link
            href="tel: 09979112814"
            className='fixed top-0 right-[1rem] z-50 mt-[70px]'
            passHref
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
