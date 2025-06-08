"use client"

import React, { useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { CondoLocations } from '@/lib/contents/condo-locations'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const About = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className='bg-[#FFFBE6] py-16 px-4'>
      <div className='max-w-5xl mx-auto'>
        {/* About Section */}
        <section className='bg-white rounded-3xl p-8 md:p-12 shadow-lg'>
          <h1 className='text-3xl md:text-5xl font-extrabold mb-6 text-primary'>About Metro Condo Living</h1>
          <div className='space-y-4 text-gray-700'>
            <p>
              Welcome to <strong>Metro Condo Living</strong>, where we transform dreams into addresses. With nearly a decade of experience, we specialize in delivering high-quality <strong>Rent-To-Own condominium units</strong> to working professionals, families, and investors across Metro Manila.
            </p>
            <p>
              Our commitment to excellence has earned the trust of thousands of homeowners. We’re proud to offer <strong>affordable luxury</strong> in highly strategic locations like <strong>Mandaluyong, Pasig, and San Juan</strong>, ensuring you stay close to everything that matters.
            </p>
            <p>
              At Metro Condo Living, we make home ownership achievable, convenient, and rewarding.
            </p>
          </div>

          {/* Main Image */}
          <div className='relative w-full h-[400px] md:h-[600px] mt-8 rounded-3xl overflow-hidden'>
            <Image
              src="/san-lorenzo-place.jpg"
              alt="San Lorenzo Place"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* What We Offer */}
        <section className='mt-16'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center text-primary'>What We Offer</h2>
          <div className='grid md:grid-cols-3 gap-8 text-center'>
            {[
              {
                title: "Rent-To-Own Condos",
                desc: "Move in today and pay later with flexible monthly terms designed for working individuals and families.",
                icon: "🏠"
              },
              {
                title: "Strategic Locations",
                desc: "Units located in key commercial zones such as Mandaluyong, Pasig, and San Juan.",
                icon: "📍"
              },
              {
                title: "Investment Opportunities",
                desc: "Great potential for rental income and long-term value appreciation in urban communities.",
                icon: "📈"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-md">
                <div className='text-4xl mb-4'>{item.icon}</div>
                <h3 className='text-lg font-bold mb-2'>{item.title}</h3>
                <p className='text-gray-600 text-sm'>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Condo Carousel */}
        <section className='mt-20 relative'>
          <h2 className='text-2xl md:text-3xl font-bold text-center text-primary mb-6'>Our Condo Locations</h2>
          <div className="embla overflow-hidden rounded-2xl">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container flex gap-6">
                {CondoLocations.map((condo) => (
                  <div key={condo.name} className="embla__slide relative overflow-hidden rounded-[2.5rem]">
                    <Image
                      fill
                      src={condo.img[0]}
                      alt={condo.name}
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      className="rounded-[2.5rem]"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 rounded-[2.5rem]" />
                    {/* Condo Name */}
                    <div className="absolute bottom-4 left-4 z-20 text-white text-lg md:text-2xl font-bold drop-shadow-lg">
                      {condo.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Arrows */}
            <button
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 bg-white p-2 md:p-3 shadow rounded-full"
              onClick={scrollPrev}
            >
              <ChevronLeftIcon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
            </button>
            <button
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 bg-white p-2 md:p-3 shadow rounded-full"
              onClick={scrollNext}
            >
              <ChevronRightIcon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
