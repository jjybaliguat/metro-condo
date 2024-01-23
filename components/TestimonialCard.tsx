import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons' 
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons' 
import Image from 'next/image'
import React from 'react'

const TestimonialCard = ({
    img,
    name,
    testimony,
}: {
    img: string
    name: string
    testimony: string
}) => {

  return (
    <div className='relative w-[300px] min-h-[200px] overflow-visible h-fit cursor-pointer bg-gray-100 shadow-lg p-5 mb-10'>
      <div className='flex flex-col gap-3 items-center pb-5'>
        <div className='absolute lg:-top-[50px] md:-top-[60px] -top-[50px] ml-auto mr-auto'>
          <div className='relative h-[100px] w-[100px] lg:h-[100px] lg:w-[100px] md:h-[120px] md:w-[120px] 
          outline outline-8 outline-white rounded-full bg-black'>
            <Image
              fill
              src={img}
              alt=""
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              className='rounded-full'
            />
          </div>
        </div>
        <p className='mt-14 text-center'>
          <FontAwesomeIcon icon={faQuoteLeft} className='text-[1.3rem] mr-2 text-primary' />
            {testimony}
          <FontAwesomeIcon icon={faQuoteRight} className='text-[1.3rem] ml-2 text-primary' /></p>
        <h1 className='absolute bottom-0 ml-auto mr-auto text-[1.3rem] font-semibold text-primary'>{name}</h1>
      </div>
    </div>
  )
}

export default TestimonialCard
