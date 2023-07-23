"use client"

import TestimonialCard from '@/components/TestimonialCard'
import GetTestimonials from '@/components/get-testimonials'
import { PageWrapper } from '@/helpers/page-wrapper'
import RevealAnimate from '@/helpers/reveal-animate'
import { testimonials } from '@/lib/contents/testimonials'
import { Skeleton } from 'antd'
import Image from 'next/image'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <>
    <PageWrapper>
        <div className='flex flex-col items-center h-fit min-h-[100vh] pb-6'>
            <div className='mt-5 px-3'>
              <h1 className="section-title font-extrabold text-center text-primary tracking-wide">TESTIMONIALS</h1>
              <p className='mt-5 text-center tracking-wide'><strong>Know what people are saying about us.</strong> Join the <i>MCL community</i> and share your thoughts about us.</p>
            </div>
              {
                    <Suspense fallback={
                      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 px-10'>
                        {
                          [...new Array(3)].map((_, i)=>(
                            <div key={i} className='w-[300px] h-fit'>
                            <div className='flex flex-col gap-3'>
                              <Skeleton.Image active />
                              <Skeleton active />
                            </div>
                          </div>
                          ))
                        }
                      </div>
                    }>
                      <GetTestimonials />
                    </Suspense>
              }
        </div>
      </PageWrapper>
    </>
  )
}

export default page
