import React from 'react'
import Image from 'next/image'

const Section2 = () => {
  return (
    <div id="discover"
        className='h-fit w-full py-6'
    >
       <div className='max-w-[1230px] h-full mx-auto'>
            <h1 className='section-title'>DISCOVER RESIDENTIAL PROPERTIES FOR SALE</h1>
            
            <div className='flex flex-col md:flex-row items-center md:gap-10 gap-5 mt-9'>
                <div className='w-[90%] md:w-2/4 h-[250px] md:h-[350px] bg-black'>
                <iframe 
                    className='w-full h-full'
                    height="315" 
                    src="https://www.youtube.com/embed/S2r6AZFWZYc" 
                    title="Empire East Highland City 1" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                ></iframe>
                </div>
                <div
                    className='flex md:flex-row flex-col'
                >
                    <Image
                        src="/condopic1.jpg"
                        alt="condopic1"
                        height={700}
                        width={400}
                    />
                    <Image
                        src="/condopic2.jpg"
                        alt="condopic1"
                        height={700}
                        width={400}
                    />
                </div>
            </div>
       </div>
    </div>
  )
}

export default Section2
