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
    <div className='w-full h-fit'>
      <div className='flex flex-col gap-3'>
        <Image
            src={img}
            alt=""
            height={650}
            width={366}
            sizes="(min-width: 400px) 366px, calc(95.5vw - 19px))"
        />
        <h1 className='text-[2rem] font-bold text-primary'>{name}</h1>
        <p>"{testimony}"</p>
      </div>
    </div>
  )
}

export default TestimonialCard
