"use client"

import CustomButton from '@/components/CustomButton'
import SelectLocation from '@/components/SelectLocation'
import SelectPropertyType from '@/components/SelectPropertyType'
import { PageWrapper } from '@/helpers/page-wrapper'
import { CondoLocations } from '@/lib/contents/condo-locations'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Types = [
  "All Properties",
  "Transit-Oriented",
  "Urban Resort",
  "Condominium",
]

const locations = [
  "All Locations",
  "Makati City",
  "Mandaluyong City",
  "Manila City",
  "Pasig City",
  "San Juan City",
  "Sta. Rosa City, Laguna",
  "Pasig City - Cainta",
]

const Properties = () => {
  const searchParams = useSearchParams()
  const location = searchParams.get('location')?? "All Locations"
  const type = searchParams.get('type')?? 'All Properties'
  const [propertyType, setPropertyType] = useState(type)
  const [searchLocation, setSearchLocation] = useState(location)
  const router = useRouter()

  const [results, setResults] = useState<any | null>()

  useEffect(()=>{
    if(location == "All Locations" && type == "All Properties"){
      setResults(CondoLocations)
    }else{
      if(location == "All Locations"){
        setResults(CondoLocations.filter((condo: any)=>{
          return condo.type.includes(type)
        }))
      }else if(type == "All Properties"){
        setResults(CondoLocations.filter((condo: any)=>{
          return condo.location.toLowerCase() == location.toLowerCase()
        }))
      }else{
        setResults(CondoLocations.filter((condo: any)=>{
          return condo.location.toLowerCase() == location.toLowerCase() && condo.type.includes(type)
        }))
      }
    }
  }, [location, type])

  return (
    <PageWrapper>
      <div
        className="relative flex z-0 h-[50vh] md:h-[60vh] w-full bg-fixed bg-no-repeat bg-center bg-cover"
        style={{backgroundImage: `url("/san-lorenzo-place.jpg")`}}
        >
          <div className='hero__black-overlay' />
          <div className="absolute flex flex-center w-full h-full z-20">
            <div className='w-full md:w-[70vw] flex flex-col items-center gap-4 p-10'>
              <h1 className='text-[1.3rem] md:text-[2rem] text-center font-bold text-white'>Upgrade your lifestyle by choosing the perfect condo for you.</h1>
              <div className='w-full flex flex-col flex-center md:flex-row'>
              <SelectPropertyType
                  options={Types}
                  containerStyle='w-full p-3 z-20'
                  selected={propertyType}
                  handleSelect={setPropertyType}
              />
              <SelectLocation
                  options={locations}
                  containerStyle='w-full p-3 z-10'
                  selected={searchLocation}
                  handleSelect={setSearchLocation}
              />
              <button 
              className='btn-primary p-3 w-[100px] rounded-lg text-white'
              onClick={()=>router.push(`/property?location=${searchLocation}&type=${propertyType}`)}
              >
                Search
              </button>
              {/* <CustomButton
                  title='Search'
                  containerStyles='bg-primary rounded-md cursor-pointer'
                  isDisabled={propertyType === '' || location === ''}
                  handleClick={()=>router.push(`/property?location=${searchLocation}&type=${propertyType}`)}
                  textStyles='text-white font-bold'
              /> */}
              </div>
            </div>
          </div>
      </div>
      <div className='w-full overflow-x-auto min-h-[250px] bg-white p-3 md:p-10'>
          {results?.length !== 0 ? (
           <>
            <div className='w-full hidden md:grid grid-cols-5 p-4 bg-gray-100 border-b-2 border-gray-300'>
            <h1 className='text-center text-primary font-bold col-span-2 md:text-[14px] lg:text-[1rem]'>Property Name</h1>
            <h1 className='md:text-[14px] lg:text-[1rem] text-primary font-bold'>Location</h1>
            <h1 className='md:text-[14px] lg:text-[1rem] text-primary font-bold'>Property Type</h1>
            </div>
            {results?.map((result: any)=>(
              <div key={result.name} className='w-full hidden md:grid h-fit grid-cols-5 p-3 border-b-2 border-gray-300 items-center'>
                <div className='flex items-center gap-5 col-span-2 pl-10'>
                  <div className='relative lg:w-[70px] lg:h-[70px] md:w-[50px] md:h-[50px]
                  outline outline-1 outline-gray-300'>
                    <Image
                    fill
                    alt='img'
                    src={result.logo}
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                    />
                  </div>
                  <h1 className='md:text-[14px] lg:text-[1rem]'>{result.name}</h1>
                </div>
                <h1 className='md:text-[14px] lg:text-[1rem]'>{result.location}</h1>
                <h1 className='max-w-[80%] md:text-[14px] lg:text-[1rem]'>{result.type.join(", ")}</h1>
                <button 
                className='btn-primary md:w-[70%] lg:w-[50%] md:text-[14px] lg:text-[1rem]'
                onClick={()=>router.push(result.link)}
                >View Info</button>
              </div>
            ))
            }
            {results?.map((result: any)=> (
              <div key={result.name}
              className='flex md:hidden flex-col gap-3 flex-center h-fit p-5 w-full border-b-2 border-gray-300'
              >
                <div className='relative w-[190px] h-[190px]
                  outline outline-1 outline-gray-300'>
                    <Image
                    fill
                    alt='img'
                    src={result.logo}
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                    />
                  </div>
                  <div className='flex flex-col gap-2 p-5'>
                    <div className='grid grid-cols-2'>
                      <h1 className='text-[14px]'>Name:</h1>
                      <h1 className='text-[14px] text-right'>{result.name}</h1>
                    </div>
                    <div className='grid grid-cols-2'>
                      <h1 className='text-[14px]'>Location:</h1>
                      <h1 className='text-[14px] text-right'>{result.location}</h1>
                    </div>
                    <div className='grid grid-cols-2'>
                      <h1 className='text-[14px]'>Type:</h1>
                      <h1 className='text-[14px] text-right'>{result.type.join(", ")}</h1>
                    </div>
                  </div>
                  <button 
                className='btn-primary md:w-[70%] lg:w-[50%] md:text-[14px] lg:text-[1rem]'
                onClick={()=>router.push(result.link)}
                >View Info</button>
              </div>
            ))}
           </>
          ) : (
            <div className='w-full flex-center'>
              <h1 className='text-danger text-[1.5rem] font-bold'>No Results Found!</h1>
            </div>
          )
          }
      </div>
    </PageWrapper>
  )
}

export default Properties
