"use client"
import NotFound from '@/app/not-found'
import SideBar from '@/components/SideBar'
import { PageWrapper } from '@/helpers/page-wrapper'
import { CondoLocations } from '@/lib/contents/condo-locations'
import React, { useEffect, useState } from 'react'

const page = ({
    params
}: {
    params: { residenceName: string}
}) => {

    const [residence, setResidence] = useState<any | null>()
    const [openMenu, setOpenMenu] = useState(false)

    useEffect(()=>{
        const res = CondoLocations.find((item)=>item.link === `/residence/${params.residenceName}`)
        if(res){
            setResidence(res)
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
      </div>
      </PageWrapper>
    </>
  )
}

export default page
