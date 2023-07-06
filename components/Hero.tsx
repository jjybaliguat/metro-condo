"use client"
import React, { useState } from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'
import { AnimatePresence, motion} from 'framer-motion'
import Link from 'next/link'

const images = [
    "/condoimage2.jpg",
    "/condoimage1.jpg",
    "/condoimage4.jpg",
    "/condoimage3.jpg",
]

// const images = [
//     "https://images.pexels.com/photos/16641324/pexels-photo-16641324/free-photo-of-sofa-in-living-room.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://images.pexels.com/photos/6301168/pexels-photo-6301168.jpeg?auto=compress&cs=tinysrgb&w=600",
// ]

const variants = {
    hidden: {
        x: 1000,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    },
    exit: {
        x: 0,
        opacity: 0
    },
}

const Hero = () => {
    const [index, setIndex] = useState(0)

    const forWardImage = () => {
        if(index == (images.length - 1)){
            setIndex(0)
        }else{
            setIndex(index + 1)
        }
    }
    const backWardImage = () => {
        if(index == 0){
            setIndex(images.length - 1)
        }else{
            setIndex(index - 1)
        }
    }

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
    <AnimatePresence initial={false}>
    <motion.div 
    className="hero bg-fixed bg-no-repeat bg-center bg-cover"
    style={{backgroundImage: `url("${images[index]}")`}}
    >
        {/* <div className="image-slideshow">
            <AnimatePresence initial={false}>
                <motion.img 
                variants={variants} 
                animate="visible" 
                initial="hidden"
                exit="exit"
                transition = {
                    {
                        duration: 0.75
                    }
                }
                src={images[index]} 
                alt="slides" 
                className='slides'
                key={images[index]}
                />
            </AnimatePresence>
        </div> */}
        {/* <div className='padding-2 absolute flex flex-row gap-2 z-40 top-3 right-3'>
            <button
            onClick={backWardImage}
            >
                <Image
                    src="/arrowback.svg"
                    alt=""
                    width={30}
                    height={30}
                    className='bg-white opacity-75 hover:opacity-100'
                />
            </button>
            <button
                onClick={forWardImage}
            >
                <Image
                    src="/arrowforward.svg"
                    alt=""
                    width={30}
                    height={30}
                    className='bg-white opacity-75 hover:opacity-100'
                />
            </button>
        </div> */}
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
    </motion.div>
    </AnimatePresence>
  )
}

export default Hero
