import React from 'react'
import TestimonialCarousel from './TestimonialCarousel'

export const revalidate = 0

async function getTestimonials() {
  const baseUrl = process.env.NEXT_PUBLIC_NODE_ENV == "development" ? "http://localhost:3000/api" : "https://metrocondoliving.com/api"
  const response: any = await fetch(`${baseUrl}/testimonials`, {cache: 'no-store'})

 
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }


  return response.json()
}

const SuccessfullClients = async() => {
  const testimonials = await getTestimonials()

  return (
    <>
        <div className='mx-auto px-5 max-w-7xl py-12'>
            <h1 className='section-title'>Successfull Clients</h1>
            <div className='mt-6 w-full flex flex-center'>
              <TestimonialCarousel
              testimonials={testimonials}
              />
            </div>
        </div>
    </>
  )
}

export default SuccessfullClients