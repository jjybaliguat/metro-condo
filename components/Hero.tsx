"use client"
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'
import { motion} from 'framer-motion'
import Link from 'next/link'

const Hero = () => {

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        const href = e.currentTarget.href
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId)
        elem?.scrollIntoView({
            behavior: "smooth"
        })
    }

  return (
    <div className="hero bg-fixed bg-no-repeat bg-center bg-cover" 
    style={{ backgroundImage: 'url("/condopic.jpg")'}}>
        <div className='hero__black-overlay' />
        {/* <div className='hero__bg-container'>
            <div className="hero__image">
                <Image
                    src="/condopic.jpg"
                    alt="hero bg"
                    fill
                    className='xs:object-contain'
                />
            </div>
        </div> */}
        <div className="absolute flex-1 pt-36 padding-x z-20">
            <h1 className="hero__title">
                METRO CONDO LIVING
            </h1>
            <p className='hero__subtitle'>
                Discover Luxurious Living: Your Dream Condo Awaits!
            </p>
            <motion.div className='flex gap-2'
                initial= {{ opacity: 0, x: 75}}
                animate={{opacity: 1, x: 0}}
                exit={{ opacity: 0, x: 75}}
                transition= {{duration: 1, delay: 0.25}}
            >
                <Link href="#discover" onClick={handleScroll}>
                    <CustomButton
                        title="Explore Condos"
                        containerStyles="bg-primary text-white rounded-full mt-10 hover:scale-105"
                    />
                </Link>
                <CustomButton
                    title="Book Now"
                    containerStyles="border border-2 border-primary text-white rounded-full 
                    mt-10 hover:scale-105"
                />
            </motion.div>
      </div>
    </div>
  )
}

export default Hero
