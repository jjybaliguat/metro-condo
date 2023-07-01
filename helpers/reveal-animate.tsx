"use client"
import {motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

const RevealAnimate = ({
        children,
        direction,
        className
    }: {
        children: React.ReactNode;
        direction?: number | 75;
        className?: string
    }
) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation()

    useEffect(()=> {
        if(isInView){
            mainControls.start("visible")
        }
    }, [isInView])

  return (
        <motion.div ref={ref}
            variants={{
                hidden: { opacity: 0, y: direction},
                visible: { opacity: 1, y: 0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
                duration: 1,
                delay: 0.25
            }}
        >
            {children}
        </motion.div>
  )
}

export default RevealAnimate
