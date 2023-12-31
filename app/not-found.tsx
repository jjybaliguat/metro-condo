import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from '@/components/CustomButton'

export const metadata = {
  title: '404 Not Found',
  icons: {
    icon: "/favicon.ico",
  },
}

const NotFound = () => {
  return (
    <>
      <div className='flex flex-col px-10 justify-center items-center h-screen'>
          <Image src="/logo.png" 
            alt="Logo" 
            height={150} 
            width={150} />
          <h1 className='font-bold text-[2rem] text-center'>Oops, the page you are looking for cannot be found.</h1>
          <Link href="/">
            <CustomButton
                title='Go to Homepage'
                containerStyles='bg-primary text-white rounded-full mt-10 hover:scale-105'
            />
          </Link>
      </div>
    </>
  )
}

export default NotFound
