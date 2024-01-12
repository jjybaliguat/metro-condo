"use client"

import { PageWrapper } from '@/helpers/page-wrapper'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const About = () => {
  const router = useRouter()
  
  return (
    <PageWrapper>
      <div
      className='h-fit pb-[5rem] w-full py-5' 
      >
        <div className='flex flex-col flex-center'>
          <h1 className='section-title'>ABOUT US</h1>
          <div className='flex flex-col gap-4 md:w-[70%] w-full p-6'>
            <p className='text-[20px] text-justify'>Metro Condo Living has been providing a high quality of service fo a Rent To Own Condo for almost have a 
              decade. Trusted by many condo owners. We continue to provide luxurious yet affordable condo units for in many cities
              around metro manila specially in Pasig and Mandaluyong.
            </p>
            <div className='flex justify-end'>
              <button 
              onClick={()=>router.push("/contact")}
              className='btn-primary hover:scale-[110%]'>Message Now</button>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default About
