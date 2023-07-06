import React from 'react'
import CondoCard from './CondoCard'
import { CondoLocations } from '@/lib/contents/condo-locations'

const CondoCatalog = () => {
  return (
    <div className='catalog'>
      <div className='absolute top-[-90px] mx-auto h-[100px] w-full
      bg-gradient-to-b from-[transparent] to-[rgb(255,255,255)]
      ' />
        <div className='max-w-[1230px] h-full mx-auto'>
            <h1 className='section-title'>Explore Condos</h1>
            <div className='flex flex-wrap gap-5 flex-center mt-10'>
                {
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
                }
            </div>
        </div>
    </div>
  )
}

export default CondoCatalog
