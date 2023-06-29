"use client"
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'

const Hero = () => {
    const handleScroll = () => {
        alert("This site is under development")
      }

  return (
    <div className="hero">
        <div className='hero__black-overlay' />
        <div className='hero__bg-container'>
            <div className="hero__image">
                <Image
                    src="/condopic.jpg"
                    alt="hero bg"
                    fill
                    className='xs:object-contain'
                />
            </div>
        </div>
        <div className="absolute flex-1 pt-36 padding-x z-20">
            <h1 className="hero__title">
                METRO CONDO LIVING
            </h1>
            <p className='hero__subtitle'>
                Discover Luxurious Living: Your Dream Condo Awaits!
            </p>
            <div className='flex gap-2'>
                <CustomButton
                    title="Explore Condos"
                    containerStyles="bg-primary text-white rounded-full mt-10 hover:scale-105"
                    handleClick={handleScroll}
                />
                <CustomButton
                    title="Book Now"
                    containerStyles="border border-2 border-primary text-white rounded-full 
                    mt-10 hover:scale-105"
                    handleClick={handleScroll}
                />
            </div>
      </div>
    </div>
  )
}

export default Hero
