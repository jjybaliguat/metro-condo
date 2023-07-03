import Image from 'next/image'
import React from 'react'

const Avatar = ({size, img, style} : {
    size?: string,
    img?: string,
    style?: string,
}) => {
  return (
    <div className={`${size === "small" ? 'h-[2.5rem] w-[2.5rem]' : size === "medium" ? 'h-[3rem] w-[3rem]' : 'h-[3.5rem] w-[3.5rem]'} rounded-full ${style}`} >
        <img src={img ? img : '/avatardefault.png'} className='rounded-full h-full w-full' />
    </div>
  )
}

export default Avatar
