import React from 'react'
import TestimonialCard from './TestimonialCard'

async function getTestimonials() {
    let res = await fetch("http://localhost:5000/testimonials")
    return res.json()
}

const GetTestimonials = async() => {
    let testimonials = await getTestimonials()

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 px-10'>
        {
            testimonials.map((item: {img: string, name: string, testimony: string})=>(
            <TestimonialCard
                img={item.img}
                name={item.name}
                testimony={item.testimony}
            />
            ))
        }
    </div>
  )
}

export default GetTestimonials
