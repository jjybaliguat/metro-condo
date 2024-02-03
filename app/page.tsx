"use client"
import { CondoCatalog, Faqs, Footer, Hero, Section3 } from '@/components'
import ClientsFeedback from '@/components/ClientsFeedback'
import CustomButton from '@/components/CustomButton'
import { PageWrapper } from '@/helpers/page-wrapper'
import Link from 'next/link'
import Contact from './contact/page'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <PageWrapper>
      <main className="relative overflow-hidden">
        <Hero />
        <CondoCatalog />
        <Section3 />
        <About />
        <Testimonials />
        <Faqs />
        {/* <ClientsFeedback /> */}
        <Contact />
        <Link
            href="tel: 09159828384"
            className='fixed top-0 right-[1rem] z-40 mt-[70px]'
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
