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
    <div className='catalog' id="explore">
      <div className='absolute top-[-90px] mx-auto h-[100px] w-full
      bg-gradient-to-b from-[transparent] to-[rgb(255,255,255)]
      ' />
      <div className="absolute top-[-50px] left-0 h-fit flex flex-row flex-center gap-1 z-30
      bg-secondary md:p-5 p-3 rounded-r-full cursor-pointer"
        onClick={()=>setOpen(true)}
      >
        <MagnifyingGlassIcon className="h-6 w-6 text-white" />
        <h1 className='text-white font-bold text-[12px] md:text-[1rem]'>Search</h1>
        {/* <SelectBar
            options={Types}
            selected={propertyType}
            handleSelect={setPropertytype}
            containerStyle='md:w-72 w-30 h-50'
         />
        <SelectBar
            options={locations}
            selected={location}
            handleSelect={setLocation}
            containerStyle='md:w-72 w-30 h-50'
         /> */}
      </div>
        <div className='relative pb-[5rem] max-w-[90%] h-full mx-auto'>
            <h1 className='section-title'>Residences</h1>
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
    </>
  )
}

export default CondoCatalog
