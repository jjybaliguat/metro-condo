"use client"

import React, { useState } from 'react'
import CondoCard from './CondoCard'
import { CondoLocations } from '@/lib/contents/condo-locations'
import CustomButton from './CustomButton'

const CondoCatalog = () => {
  const [viewAll, setViewAll] = useState(false)
  const toggleViewAll = () => setViewAll(!viewAll)

  return (
    <div className='catalog'>
      <div className='absolute top-[-90px] mx-auto h-[100px] w-full
      bg-gradient-to-b from-[transparent] to-[rgb(255,255,255)]
      ' />
        <div className='relative pb-[5rem] max-w-[90%] h-full mx-auto'>
            <h1 className='section-title'>Explore Condos</h1>
            <div className='flex flex-wrap gap-5 flex-center mt-10'>
                {viewAll ? (
                    CondoLocations.map((item)=> (
                        <CondoCard
                            name={item.name}
                            location={item.location}
                            description={item.description}
                            price={item.price}
                            img={item.img}
                            link={item.link}
                        />
                    ))
                ) : (
                  CondoLocations.slice(0, 4).map((item)=>(
                    <CondoCard
                            name={item.name}
                            location={item.location}
                            description={item.description}
                            price={item.price}
                            img={item.img}
                            link={item.link}
                        />
                  ))
                )
                }
            </div>
            <button
              className='absolute bottom-0 mx-auto py-3 px-10 rounded-[10px] bg-primary text-white text-[14px]'
              onClick={toggleViewAll}
            >
              {viewAll ? "View Less" : "View More"}
            </button>
        </div>
    </div>
  )
}

export default CondoCatalog
