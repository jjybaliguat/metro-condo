"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import RevealAnimate from '@/helpers/reveal-animate'
import {motion, useAnimation, useInView} from "framer-motion"

const Section2 = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation()

    useEffect(()=> {
        if(isInView){
            mainControls.start("visible")
        }
    }, [isInView])

  return (
    <div id="discover"
        className='h-screen w-full py-6'
    >
       <div className='max-w-[1230px] h-full mx-auto'>
            <h1 className='section-title'>DISCOVER RESIDENTIAL PROPERTIES FOR SALE</h1>
            
            <div className='flex flex-col md:flex-row items-center md:gap-10 gap-5 mt-9'>
                    <motion.div ref={ref}
                    className='w-[90%] md:w-2/4 h-[250px] md:h-[350px] bg-black'
                    variants={{
                        hidden: { opacity: 0, x: -75},
                        visible: { opacity: 1, x: 0}
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                        duration: 1,
                        delay: 0.25
                    }}
                    >
                        <iframe
                            className='w-full h-full'
                            height="315" 
                            src="https://www.youtube.com/embed/S2r6AZFWZYc" 
                            title="Empire East Highland City 1" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                        ></iframe>
                    </motion.div>
                <div
                    className='flex md:flex-row flex-col max-w-[90%]'
                >
                        <RevealAnimate direction={-100}>
                            <Image
                                src="/condopic1.jpg"
                                alt="condopic1"
                                height={700}
                                width={400}
                            />
                        </RevealAnimate>
                        <RevealAnimate direction={100}>
                            <Image
                                src="/condopic2.jpg"
                                alt="condopic1"
                                height={700}
                                width={400}
                            />
                        </RevealAnimate>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Section2
