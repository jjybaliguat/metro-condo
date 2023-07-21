"use client"
import { CondoCatalog, Contact, Faqs, Footer, Hero, Section3 } from '@/components'
import ClientsFeedback from '@/components/ClientsFeedback'
import CustomButton from '@/components/CustomButton'
import Testimonials from '@/components/Testimonials'
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
        {/* <ClientsFeedback /> */}
        <Testimonials />
        <Contact />
        <Link
            href="tel: 09979112814"
            className='fixed top-0 right-[1rem] z-40 mt-[70px]'
            passHref
        >
            <CustomButton
                title='Call Us Now'
                containerStyles='bg-primary text-white text-[12px] md:text-[1rem]'
            />
        </Link>
        <button
          className='origin-bottom-right -rotate-90 fixed bottom-[200px] right-0 
          bg-secondary text-white p-2 md:p-3 z-50 hover:-translate-x-1 drop-shadow-md hover:drop-shadow-2xl text-[12px] md:text-[1rem]'
        >
          Rate you experience
        </button>
      </main>
    </PageWrapper>
  )
}
