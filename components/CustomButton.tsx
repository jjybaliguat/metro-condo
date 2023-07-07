"use client"

import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'

const CustomButton = ({title, containerStyles, textStyles, isDisabled, rightIcon, btnType, handleClick}: CustomButtonProps) => {
    
  return (
    <button
        disabled={isDisabled}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles} ${isDisabled ? 'opacity-[0.6] cursor-not-allowed' : ''}`}
        onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image src={rightIcon}
              alt="right icon"
              fill
              className='object-contain'
            />
          </div>
        )}
    </button>
  )
}

export default CustomButton
