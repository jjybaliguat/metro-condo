'use client'

import React from 'react'
import useSWR from 'swr'
import TestimonialCarousel from './TestimonialCarousel'

// Fetcher function
const GetTestimonials = async () => {
  const response = await fetch("/api/testimonials")

  if (!response.ok) {
    throw new Error("Failed to fetch testimonials")
  }

  return response.json()
}

const SuccessfullClients = () => {
  const { data: testimonials, isLoading, error } = useSWR('getTestimonials', GetTestimonials)

  return (
    <div className='mx-auto px-5 max-w-7xl py-12'>
      <h1 className='section-title'>Successfull Clients</h1>

      {/* Loading State */}
      {isLoading && (
        <div className="mt-6 text-center text-gray-500">Loading testimonials...</div>
      )}

      {/* Error State */}
      {error && (
        <div className="mt-6 text-center text-red-500">Error loading testimonials: {error.message}</div>
      )}

      {/* Data Display */}
      {!isLoading && !error && testimonials && (
        <div className='mt-6 w-full flex flex-center'>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      )}
    </div>
  )
}

export default SuccessfullClients
