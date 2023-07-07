import Image from 'next/image'
import React from 'react'
import { MapPinIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';
import CustomButton from './CustomButton';

const CondoCard = ({
    name,
    location,
    img,
    description,
    price,
    link
}:{
    name: string,
    location: string,
    img: string,
    description: string,
    price: number,
    link: string,
}) => {
  return (
    <div className='h-fit w-[300px] md:w-[280px] rounded-[10px]'>
      <Link
        href={link}
      >
        <div className='h-[50px] w-full bg-primary rounded-t-[10px]
          flex flex-row items-center p-5 text-white'>
          {name}
        </div>
        <div className='relative h-[180px] w-full bg-primary rounded-b-[10px]'>
          <img src={img} alt="image" className='h-full w-full rounded-b-[10px]'/>
          <div className='absolute flex items-center bottom-0 left-0 h-[40px] w-[150px] bg-secondary
          rounded-bl-[10px] rounded-tr-[20px] p-3'>
              <div className="flex flex-row gap-1 items-center">
                  <MapPinIcon className="h-7 w-7 text-white" />
                  <p className='text-[10px] text-white'>{location}</p>
              </div>
          </div>
          <Image
            src="/empireeast-logo.png"
            alt='empireeastlogo'
            height={50}
            width={50}
            className='absolute top-0 right-0'
          />
        </div>
      </Link>
      <div className='condo-description'>
        <p className='md:text-[14px] text-[1rem] text-justify'>{description}</p>
      </div>
      <div className='flex flex-between gap-5 mt-3'>
        <div className='flex flex-col'>
            <p>Starting from</p>
            <p className='text-[red] font-bold'>{price}</p>
        </div>
        <Link href={link}>
            <CustomButton
                title="Learn More"
                containerStyles='rounded-full bg-secondary text-white text-[12px]'
            />
        </Link>
      </div>
    </div>
  )
}

export default CondoCard
