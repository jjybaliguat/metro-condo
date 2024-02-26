"use client"
import Image from 'next/image'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

type Testimonial = {
  _id: string,
  photo: {
    id: string,
    webViewLink: string,
    webContentLink: string
  },
  name: string,
  testimony: string
}

const TestimonialCarousel = ({
    testimonials,
}: {
    testimonials: any
}) => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <>
      <div className="embla w-full">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="flex h-fit px-6 md:px-16 gap-6">
            {testimonials?.map((testimony : Testimonial)=>(
              <div key={testimony._id} className="embla__slide2 w-full"> 
                <div className='w-full flex flex-col-reverse md:flex-row gap-4 p-5 md:justify-between items-center'>
                  <div className='flex flex-col gap-4 md:gap-8 md:max-w-[60%]'>
                    <h1 className='md:text-[1.5rem] text-center md:text-left'>"{testimony.testimony}"</h1>
                    <p className='md:text-[1.2rem] font-bold text-center md:text-left'>{testimony.name}</p>
                  </div>
                  <div className='relative h-[180px] w-[180px] md:h-[300px] md:w-[300px] rounded-full'>
                  <Image
                    fill
                    src={`https://drive.google.com/uc?export=view&id=${testimony.photo.id}`}
                    alt=""
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                    className='rounded-full'
                  />
                  </div>
                </div>
              </div>
            ))
            }
          </div>
        </div>
        <button className="absolute left-0 top-[40%] bg-slate-200 md:p-4 p-1 rounded-full" onClick={scrollPrev}>
            <ChevronLeftIcon className="md:h-9 h-7 w-7 md:w-9 h-7 w-7 text-black" />
        </button>
        <button className="absolute right-0 top-[40%] bg-slate-200 md:p-4 p-1 rounded-full" onClick={scrollNext}>
          <ChevronRightIcon className="md:h-9 h-7 w-7 md:w-9 h-7 w-7 text-black" />
        </button>
      </div>
    </>
  )
}

export default TestimonialCarousel
