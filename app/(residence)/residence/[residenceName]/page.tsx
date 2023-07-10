"use client"
import NotFound from '@/app/not-found'
import SideBar from '@/components/SideBar'
import { PageWrapper } from '@/helpers/page-wrapper'
import { CondoLocations } from '@/lib/contents/condo-locations'
import React, { useEffect, useState } from 'react'
import { MapPinIcon } from "@heroicons/react/24/solid";
import Select from '@/components/Select'
import { CubeIcon } from "@heroicons/react/24/solid";
import SelectUnit from '@/components/SelectUnit'
import UnitsVewDialog from '@/components/UnitsVewDialog'


const page = ({
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
        console.log(units);
        
        units?.units?.map((item: { image: string })=>{
            unitImages ? setUnitImages([...unitImages, item.image]) : setUnitImages([item.image])
        })
    }, [units])

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
                  <img src={residence?.img[0]} 
                      className='h-full w-full'
                  />
                  <img
                      src="/empireeast-logo.png"
                      alt="empireast"
                      className='absolute top-0 left-0 md:h-[100px] md:w-[120px] h-[80px] w-[100px]'
                  />
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
            <div id="location" className="flex md:flex-row flex-col gap-5 p-5 bg-white rounded-[15px] shadow-lg">
                <div className='flex md:flex-row flex-col gap-5 md:w-[50%] w-[100%]'>
                    <MapPinIcon className="h-8 w-8 text-black" />
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
            {/* End Location */}
            {/* 5 Star Amenities */}
            <div id="amenities" className="flex md:flex-row flex-col gap-5 p-5 bg-white rounded-[15px] shadow-lg">
                <img className="h-12 w-12" src='/amenitiesicon.png' />
                <div className='flex flex-col gap-5'>
                    <h1 className='md:text-[2rem] text-[1.5rem] font-bold'>5 STAR AMENITIES</h1>
                    {residence?.amenities?.map((item: string, index: React.Key | null | undefined)=>(
                        <h1
                        key={index}
                        className='mt-3'
                        >{item}</h1>
                    ))}
                </div>
            </div>
            {/* End 5 Star Amenities */}
            {/* Site Plan*/}
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
            {/* End Site Plan */}
            {/* Unit Layout */}
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
                                        className='w-full h-[250px] outline outline-1 
                                        outline-secondary-100 cursor-pointer'
                                        onClick={()=>setOpenDialog({isOpen: true, image: item.image})}
                                        >
                                            <img src={item.image} className='w-full h-full'/>
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
                                        className='w-full h-[250px] outline outline-1 
                                        outline-secondary-100 cursor-pointer'
                                        onClick={()=>setOpenDialog({isOpen: true, image: item.image})}
                                        >
                                            <img src={item.image} className='w-full h-full'/>
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
            {/* End Unit Layout */}
            {/* 3D Visualization */}
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
            {/* End 3D Visualization */}
            {/* Schematic */}
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
            {/* End Schematic */}
          </div>
      </div>
      </PageWrapper>
    </>
  )
}

export default page
