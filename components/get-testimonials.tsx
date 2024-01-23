import React from 'react'
import TestimonialCard from './TestimonialCard'

async function getTestimonials() {
    const baseUrl = process.env.NEXT_PUBLIC_NODE_ENV == "development" ? "http://localhost:8000/api" : "https://metro-api.rdnaksnds.com/api"
    const response = await fetch(`${baseUrl}/testimonials`, {cache: 'no-store'})
    return response.json()
}

type Testimony = {
    _id: string, 
    name: string, 
    testimony: string, 
    photo: {
        id: String,
        webViewLink: String,
        webContentLink: String
    }
}


const GetTestimonials = async() => {
    let testimonials: any = await getTestimonials()

  return (
    <div className='mt-20 flex flex-wrap justify-center gap-10 mt-20 px-10'>
        {testimonials &&
            testimonials?.map((item: Testimony)=>(
            <TestimonialCard
                key={item._id}
                img={`https://drive.google.com/uc?export=view&id=${item?.photo?.id}`}
                name={item.name}
                testimony={item.testimony}
            />
            ))
        }
    </div>
  )
}

export default GetTestimonials
