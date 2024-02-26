"use client"

import React, { useState } from 'react'
import CondoCard from './CondoCard'
import { CondoLocations } from '@/lib/contents/condo-locations'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SearchDialog from './SearchDialog';


const CondoCatalog = () => {
  const [viewAll, setViewAll] = useState(false)
  const toggleViewAll = () => setViewAll(!viewAll)
  const [open, setOpen] = useState(false)

  return (
    <>
    <SearchDialog
      isOpen={open}
      closeModal={()=>setOpen(false)}
    />
    <div className='catalog' id="catalog">
      <div className='absolute top-[-90px] mx-auto h-[100px] w-full
      bg-gradient-to-b from-[transparent] to-[rgb(255,255,255)]
      ' />
        <div className='relative px-5 pb-[5rem] max-w-7xl h-full mx-auto'>
            <h1 className='section-title'>Residences</h1>
            <div className='flex flex-wrap gap-5 flex-center mt-10'>  
                {viewAll ? (
                    CondoLocations.map((item)=> (
                        <CondoCard
                            key={item.name}
                            name={item.name}
                            location={item.location}
                            description={item.description}
                            price={item.price}
                            img={item.img[0]}
                            logo={item.logo}
                            link={item.link}
                        />
                    ))
                ) : (
                  CondoLocations.slice(0, 4).map((item)=>(
                    <CondoCard
                           key={item.name} 
                            name={item.name}
                            location={item.location}
                            description={item.description}
                            price={item.price}
                            img={item.img[0]}
                            logo={item.logo}
                            link={item.link}
                        />
                  ))
                )
                }
            </div>
            <div className="flex flex-row gap-2">
              <button
                className='absolute bottom-0 mx-auto py-3 px-10 rounded-[10px] bg-primary text-white text-[14px]'
                onClick={toggleViewAll}
              >
                {viewAll ? "View Less" : "View More"}
              </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default CondoCatalog
