"use client"
import React, { useEffect, useState } from 'react'

const Progressbar = () => {
    const [progress, setProgress] = useState(0)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setProgress((prev)=>
            prev >= 100 ? 0 : prev + 10
            )
        }, 500);
        return () => {
          clearInterval(interval)
        }
    }, [])

  return (
    <div
    className='fixed top-0 left-0 w-[100vw] h-[4px] z-50'
    >
      <div className='loading-bar' style={{width: `${progress}%`}} />
    </div>
  )
}

export default Progressbar
