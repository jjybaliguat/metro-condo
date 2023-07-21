import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link'

const Testimonials = () => {
  return (
    <>
    <div className='flex md:flex-row flex-col-reverse items-center gap-4 h-fit md:h-[400px] pb-[5rem] w-full py-6 bg-primary text-white'>
        <img src="/testimonial.svg" className='md:h-[100%] h-[200px]' />
        <div className='p-5 flex flex-col gap-5'>
            <h1 className='font-extrabold md:text-[3rem] text-[1.5rem]'>Know what they say about MCL</h1>
            <Link href="/testimonials">
                <CustomButton
                    title='Explore more'
                    containerStyles='bg-secondary rounded-[10px] w-fit'
                    textStyles='text-white'
                />
            </Link>
        </div>
    </div>
    </>
  )
}

export default Testimonials
