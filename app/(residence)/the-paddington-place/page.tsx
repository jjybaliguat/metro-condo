import { PageWrapper } from '@/helpers/page-wrapper'
import { CondoLocations } from '@/lib/contents/condo-locations'
import Image from 'next/image'
import React from 'react'

const ThePaddingTon = () => {

  return (
   <>
   <PageWrapper>
    <div className="relative flex flex-col gap-0">
        <div className="relative flex md:flex-row flex-col w-full h-fit">
        <div className="relative md:h-[100vh] h-[300px] md:w-[65%] w-full">
                <Image
                    src={CondoLocations[1].img[1]}
                    alt='paddington-img'
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
                    <div className='relative md:h-[150px] md:w-[200px] h-[80px] w-[100px]'>
                        <Image
                            src={'/paddington-place-logo.png'}
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
                <h1 className='md:text-[3rem] text-[2rem] font-bold text-center'>{CondoLocations[1].name}</h1>
                <h1 className='md:text-[1.5rem] text-[1rem]'>{CondoLocations[1].description}</h1>
            </div>
        </div>
    </div>
    </PageWrapper>
   </>
  )
}

export default ThePaddingTon
