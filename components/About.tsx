"use client"

import React, { useCallback } from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { CondoLocations } from '@/lib/contents/condo-locations'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const About = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <>
    <div className='h-fit pb-[5rem] w-full py-16 xs:px-4 bg-[#FFFBE6]'>
      <div className='w-full h-full px-4'>
        {/* <img src="/testimonial.svg" className='md:h-[100%] h-[150px]' /> */}
        {/* <div className='p-5 flex flex-col gap-5'>
            <h1 className='font-extrabold md:text-[3rem] text-[1.5rem]'>Know what they say about MCL</h1>
            <Link href="/testimonials">
                <CustomButton
                    title='Explore more'
                    containerStyles='bg-secondary rounded-[10px] w-fit'
                    textStyles='text-white'
                />
            </Link>
        </div> */}
        <div className='bg-white rounded-lg w-full mx-auto max-w-5xl bg-white rounded-[2.5rem]'>
          <div className='py-12 md:px-12 px-8'>
            <h1 className='md:text-[4rem] text-[2rem] font-extrabold'>About Us</h1>
            <div className='md:mt-12 mt-8'>
              <div className='flex flex-col md:gap-6 gap-4'>
                <h1 className='md:text-[1.5rem]'>Embark on a journey with Metro Condo Living, where luxury meets affordability in the heart of Metro Manila.</h1>
                <h1 className='md:text-[1.5rem]'>Metro Condo Living is proud to offer its exceptional Rent To Own Condo service, which has consistently 
                delivered a high standard of quality for nearly a decade.</h1>
                <h1 className='md:text-[1.5rem]'>Our esteemed reputation is built on the trust of countless condo owners who have chosen us as their preferred 
                provider. As an organization, we remain committed to delivering luxurious yet affordable condo units in various cities across Metro Manila, with 
                a special focus in Pasig, San Juan, and Mandaluyong.</h1>
              </div>
            </div>
          </div>
          <div className='relative md:mt-12 mt-4 w-full md:h-[650px] h-[400px] rounded-[2.5rem]'>
            <Image
              fill
              src="/san-lorenzo-place.jpg"
              alt="slp image"
              style={{
                objectFit: "cover",
                objectPosition: "center"
              }}
              className='rounded-[2.5rem]'
            />
          </div>
        </div>
      </div>
        <div className="mt-12 embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {CondoLocations.map((condo)=>(
                <div key={condo.name} className="embla__slide">
                <Image
                  fill
                  src={condo.img[0]}
                  alt="img"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                  className='rounded-[2.5rem]'
                />
              </div>
              ))}
            </div>
          </div>
          <button className="embla__prev bg-slate-200 md:p-4 p-2 rounded-full" onClick={scrollPrev}>
            <ChevronLeftIcon className="md:h-9 h-7 w-7 md:w-9 h-7 w-7 text-black" />
          </button>
          <button className="embla__next bg-slate-200 md:p-4 p-2 rounded-full" onClick={scrollNext}>
            <ChevronRightIcon className="md:h-9 h-7 w-7 md:w-9 h-7 w-7 text-black" />
          </button>
        </div>
    </div>
    </>
  )
}

export default About
