"use client"

import NotFound from '@/app/not-found'
import SideBar from '@/components/SideBar'
import { PageWrapper } from '@/helpers/page-wrapper'
import { CondoLocations } from '@/lib/contents/condo-locations'
import React, { Suspense, useEffect, useState } from 'react'
import { MapPinIcon } from "@heroicons/react/24/solid";
import Select from '@/components/Select'
import { CubeIcon } from "@heroicons/react/24/solid";
import SelectUnit from '@/components/SelectUnit'
import UnitsVewDialog from '@/components/UnitsVewDialog'
import RevealAnimate from '@/helpers/reveal-animate'
import Image from 'next/image'
import { Skeleton } from 'antd'
import { SparklesIcon } from '@heroicons/react/24/outline'


const Residence = ({
    params
}: {
    params: { residenceName: string}
}) => {

    const [residence, setResidence] = useState<any | null>()
    const [openMenu, setOpenMenu] = useState(false)
    const [units, setUnits] = useState<any | null>()
    const [openDialog, setOpenDialog] = useState({isOpen: false, image: ""})
    const [unitImages, setUnitImages] = useState<Array<string>>()

    useEffect(()=>{
        
        const res = CondoLocations.find((item)=>item.link === `/residence/${params.residenceName}`)
        if(res){
            setResidence(res)
            setUnits(res.units)
        }else{
            setResidence(null)
        }
    }, [])

    if(!residence){
        return (
            <>
                <NotFound />
            </>
        )
    }

    const toggleOpen = () => setOpenMenu(!openMenu)

  return (
    residence &&
    <>
        <UnitsVewDialog
            isOpen={openDialog}
            closeModal={()=>setOpenDialog({isOpen: false, image: ""})}
        />
      <PageWrapper>
        <SideBar
            isOpen={openMenu}
            onClose={()=>setOpenMenu(false)}
        />
      <div className="relative flex flex-col gap-0">
            {/* Menu */}
            <div className="fixed top-0 right-0 z-40 mt-[70px] h-fit w-fit">
                <button
                    className='font-bold text-[14px] md:text-[1rem] bg-secondary text-white p-3 rounded-bl-full rounded-tl-full'
                    onClick={toggleOpen}
                >
                    MENU
                </button>
            </div>
            {/* End Menu */}
            {/* Main Site Description */}
          <div className="relative flex md:flex-row flex-col w-full h-fit">
          <div className="relative md:h-[100vh] h-[300px] md:w-[65%] w-full">
                <Image
                    src={residence?.img[0]}
                    placeholder='blur'
                    blurDataURL={residence?.img[0]}
                    alt='residence-img'
                    fill
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                />
                {/* <img src={CondoLocations[0].img[1]} 
                    className='h-full w-full'
                /> */}
                <div className='absolute top-0 left-0'>
                    <div className='relative md:h-[150px] md:w-[200px] h-[80px] w-[80px]'>
                        <Image
                            src={residence?.logo}
                            alt='empire-east-logo'
                            fill
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }}
                        />
                    </div>
                </div>
            </div>
              <div className="md:absolute right-0 md:h-[100vh] h-fit md:w-[55%] 
              w-full bg-primary flex flex-col gap-5 flex-center p-10 text-white">
                  <h1 className='md:text-[3rem] text-[2rem] font-bold text-center'>{residence.name}</h1>
                  <h1 className='md:text-[1.5rem] text-[1rem]'>{residence.description}</h1>
              </div>
          </div>
          {/* End Main Site Description */}
          <div className='flex flex-col gap-10 mx-auto w-[90vw] h-fit py-10'>
            {/* Location */}
            <RevealAnimate direction={100}>
                <div id="location" className="flex md:flex-row flex-col gap-5 p-5 bg-white rounded-[15px] shadow-lg">
                    <div className='flex md:flex-row flex-col gap-5 md:w-[50%] w-[100%]'>
                        <div className='relative h-[30px] w-[30px]'>
                            <Image
                                fill
                                src={'/mapsicon.png'}
                                alt="icon"
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                            />
                        </div>
                        {/* <img src="/mapsicon.png" alt="icon" className='h-[30px]' /> */}
                        <div className='flex flex-col gap-5'>
                            <h1 className='md:text-[2rem] text-[1.5rem] font-bold'>LOCATION</h1>
                            <h1>{residence.address}</h1>
                        </div>
                    </div>
                    <div className='md:h-[400px] h-[250px] md:w-[50%] w-[100%]'>
                        <iframe src={residence.embedLink}
                        className='h-full w-full'
                        width="600" 
                        height="450" 
                        allowFullScreen={true} 
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </RevealAnimate>
            {/* End Location */}
            {/* LandMArks */}
            <RevealAnimate direction={100}>
                <div id="landmarks" className="flex flex-col gap-5 p-5 pb-10 bg-white rounded-[15px] shadow-lg">
                    <div className='flex md:flex-row flex-col gap-5 md:w-[50%] w-[100%]'>
                        <div className='relative h-[30px] w-[30px]'>
                            <Image
                                fill
                                src={'/mapsicon.png'}
                                alt="icon"
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                            />
                        </div>
                        <h1 className='md:text-[2rem] text-[1.5rem] font-bold'>LAND MARKS</h1>
                    </div>
                    {
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 gap-8'>
                          {(residence?.landmarks.length > 0) ? (
                            residence?.landmarks.map((landmark: any, index: React.Key | null | undefined)=>(
                              <div key={index} className='w-full h-fit'>
                                <div className='flex flex-col gap-3'>
                                    <div className='relative h-[250px] w-[250px] md:w-full rounded-md shadow-lg outline outline-1 outline-slate-300'>
                                        <Image
                                            fill
                                            src={landmark.img}
                                            alt='img'
                                            style={{
                                                objectFit: "cover",
                                                objectPosition: "center"
                                            }}
                                            className='rounded-md'
                                        />
                                        <div className='absolute left-0 bottom-0 rounded-bl-md p-1 bg-white'>
                                            <h1 className='text-[14px]'>{landmark.name}</h1>
                                        </div>
                                    </div>
                                    <p className='text-justify'>{landmark.description}</p>
                                </div>
                            </div>
                            )) ) : (
                                <h1 className='text-[2rem] font-bold'>No Landmarks Available As Of Now</h1>
                            )
                          }
                        </div>
                    }
                </div>
            </RevealAnimate>
            {/* End LandMArks */}
            {/* 5 Star Amenities */}
            <RevealAnimate direction={100}>
            <div id="amenities" className="flex flex-col gap-5 p-5 pb-10 bg-white rounded-[15px] shadow-lg">
                <div className='flex md:flex-row flex-col gap-5 md:w-[50%] w-[100%]'>
                    <SparklesIcon className="h-7 w-7 text-primary" />
                    <h1 className='md:text-[2rem] text-[1.5rem] font-bold'>AMENITIES</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 gap-8'>
                    {(residence?.amenities.length) > 0 ? (
                    residence?.amenities?.map((amenity: any, index: React.Key | null | undefined)=>(
                        <div key={index} className='w-full h-fit'>
                            <div className='flex flex-col gap-3'>
                                <div className='relative h-[250px] w-[250px] md:w-full rounded-md shadow-lg outline outline-1 outline-slate-300'>
                                    <Image
                                        fill
                                        src={amenity.img}
                                        alt='img'
                                        style={{
                                            objectFit: "cover",
                                            objectPosition: "center"
                                        }}
                                        className='rounded-md'
                                    />
                                    <div className='absolute left-0 bottom-0 rounded-bl-md p-1 bg-white'>
                                        <h1 className='text-[14px]'>{amenity.name}</h1>
                                    </div>
                                </div>
                                <p className='text-justify'>{amenity.description}</p>
                            </div>
                        </div>
                    )) ) : (
                        <h1 className='text-[2rem] font-bold'>No Amenities to show as of now</h1>
                    )
                    }
                </div>
            </div>
            </RevealAnimate>
            {/* End 5 Star Amenities */}
            {/* Site Plan*/}
            <RevealAnimate direction={100}>
            <div id="site-plan" className="flex md:flex-row flex-col gap-5 p-5 bg-white rounded-[15px] shadow-lg">
                <img className="h-10 w-10 text-black" src='/site-plan-icon.png' />
                <div className='flex flex-col gap-5'>
                    <h1 className='md:text-[2rem] text-[1.5rem] font-bold'>SITE DEVELOPMENT PLAN</h1>
                    <div className='flex flex-col md:flex-row gap-3'>
                        <div className="md:w-[50%] w-[100%]">
                            {residence?.sitePlan?.descriptions?.map((item: string, index: React.Key | null | undefined)=>(
                                <h1
                                key={index}
                                className='mt-3'
                                >{item}</h1>
                            ))}
                        </div>
                        <div className="md:w-[50%] w-[100%] md:h-[400px] h-[250px] cursor-pointer"
                        onClick={()=>setOpenDialog({isOpen: true, image: residence.sitePlan?.img})}
                        >
                            <img src={residence.sitePlan?.img} 
                                className='w-full h-full'
                            />
                        </div>
                    </div>
                </div>
            </div>
            </RevealAnimate>
            {/* End Site Plan */}
            {/* Unit Layout */}
            <RevealAnimate direction={100}>
            <div id="layout" className="flex flex-col gap-10 p-5 bg-white rounded-[15px] shadow-lg">
                <div className='flex md:flex-row md:justify-between flex-col'>
                    <div className='flex flex-row items-center gap-3'>
                        <img className="h-10 w-10 text-black" src='/site-plan-icon.png' />
                        <h1 className='md:text-[2rem] text-[1.5rem] font-bold'>UNIT LAYOUT</h1>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <h1>Select Unit / Tower</h1>
                        <SelectUnit
                            units={residence?.units}
                            selected={units.name? units : residence.units[0]}
                            handleSelect={setUnits}
                            containerStyle='md:w-[300px] w-[200px] shadow-md'
                        />
                    </div>
                </div>
                <div className='flex md:flex-row flex-col gap-5 mt-5'>
                    <div className="md:w-[300px] w-[80vw] h-[400px] mx-auto">
                        <img src={units.image? units.image : residence.units[0].image} alt="unit image" className='w-full h-full'/>
                    </div>
                    <div className='flex flex-wrap gap-5 justify-center md:w-[70%] w-full'>
                        {
                            units.units? (
                                units.units.map((item: {
                                    name: string,
                                    image: string,
                                    area: string,
                                    price: number
                                }, index: number)=>(
                                    <>
                                    <div className='flex flex-col gap-3 w-[250px] h-fit'>
                                        <div
                                        key={item.name}
                                        className='w-full h-fit outline outline-1 
                                        outline-secondary-100 cursor-pointer'
                                        onClick={()=>setOpenDialog({isOpen: true, image: item.image})}
                                        >
                                            <img src={item.image} className='w-full'/>
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <h1 className='font-extrabold'>{item.name}</h1>
                                            <p>{item.area}</p>
                                            <p className='text-[#ff0000]'>{item.price}</p>
                                        </div>
                                    </div>
                                    </>
                                ))
                            ) : (
                                residence.units[0].units.map((item: {
                                    name: string,
                                    image: string,
                                    area: string,
                                    price: number
                                }, index: number)=>(
                                    <>
                                    <div className='flex flex-col gap-3 w-[250px] h-fit'>
                                        <div
                                        key={item.name}
                                        className='w-full h-fit outline outline-1 
                                        outline-secondary-100 cursor-pointer'
                                        onClick={()=>setOpenDialog({isOpen: true, image: item.image})}
                                        >
                                            <img src={item.image} className='w-full'/>
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <h1 className='font-extrabold'>{item.name}</h1>
                                            <p>{item.area}</p>
                                            <p className='text-[#ff0000]'>{item.price}</p>
                                        </div>
                                    </div>
                                    </>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
            </RevealAnimate>
            {/* End Unit Layout */}
            {/* 3D Visualization */}
            <RevealAnimate direction={100}>
            <div id="3d-visualization" className="flex md:flex-row flex-col gap-5 p-5 bg-white rounded-[15px] shadow-lg">
                <CubeIcon className="h-10 w-10 text-black" />
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-row items-center gap-2'>
                        <h1 className='md:text-[2rem] text-[1.5rem] font-bold'>3D VISUALIZATION</h1>
                        {/* <Select 
                            options={unitOptions}
                            selected={unitOptions?.name}
                            handleSelect={}
                        /> */}
                    </div>
                    {/* <div className='flex flex-col md:flex-row gap-3'>
                        <div className="md:w-[50%] w-[100%]">
                            {residence?.sitePlan?.descriptions?.map((item: string, index: React.Key | null | undefined)=>(
                                <h1
                                key={index}
                                className='mt-3'
                                >{item}</h1>
                            ))}
                        </div>
                        <div className="md:w-[50%] w-[100%] md:h-[400px] h-[250px]">
                            <img src={residence.sitePlan?.img} 
                                className='w-full h-full'
                            />
                        </div>
                    </div> */}
                </div>
            </div>
            </RevealAnimate>
            {/* End 3D Visualization */}
            {/* Schematic */}
            <RevealAnimate direction={100}>
            <div id="schematic" className="flex md:flex-row flex-col gap-5 p-5 bg-white rounded-[15px] shadow-lg">
                <CubeIcon className="h-10 w-10 text-black" />
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-row items-center gap-2'>
                        <h1 className='md:text-[2rem] text-[1.5rem] font-bold'>SCHEMATIC</h1>
                        {/* <Select 
                            options={unitOptions}
                            selected={unitOptions?.name}
                            handleSelect={}
                        /> */}
                    </div>
                    {/* <div className='flex flex-col md:flex-row gap-3'>
                        <div className="md:w-[50%] w-[100%]">
                            {residence?.sitePlan?.descriptions?.map((item: string, index: React.Key | null | undefined)=>(
                                <h1
                                key={index}
                                className='mt-3'
                                >{item}</h1>
                            ))}
                        </div>
                        <div className="md:w-[50%] w-[100%] md:h-[400px] h-[250px]">
                            <img src={residence.sitePlan?.img} 
                                className='w-full h-full'
                            />
                        </div>
                    </div> */}
                </div>
            </div>
            </RevealAnimate>
            {/* End Schematic */}
          </div>
      </div>
      </PageWrapper>
    </>
  )
}

export default Residence
