import { PageWrapper } from '@/helpers/page-wrapper'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <PageWrapper>
        <div className='h-[100vh] w-[100vw] flex-center flex-col'>
            <Image
                src="/under-construction.png"
                alt=""
                height={760}
                width={366}
                sizes="(min-width: 600px) 366px, calc(95.5vw - 19px))"
            />
            <h1
          className='text-[40px] text-center'
          >Builders section is under development</h1>
        </div>
    </PageWrapper>
  )
}

export default page
