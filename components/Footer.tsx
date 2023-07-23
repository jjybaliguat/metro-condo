import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ytLogo from '../public/ytlogo.png'

const Footer = () => {
  return (
    <footer 
        className='h-fit w-full bg-secondary text-white'
    >
        <div className="flex md:flex-row align-center flex-col gap-10 md:gap-28 p-8">
            <div className='flex flex-col gap-3 md:w-[40%] w-[90%]'>
                <h1 className='font-bold md:text-[2.5rem] text-[2rem]'>METRO CONDO LIVING</h1>
                <p>632 Shaw Blvd, Mandaluyong, 1550 Metro Manila</p>
                <p>09159828384</p>
                <p>metrocondolifestyle@gmail.com</p>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='font-bold md:text-[1.5rem] text-[1rem]'>Useful Links</h1>
                <Link
                    href="/"
                    className='flex gap-1'
                >
                    <span className='text-[1rem]'>&gt;</span>
                    Home
                </Link>
                <Link
                    href="/"
                    className='flex gap-1'
                >
                    <span className='text-[1rem]'>&gt;</span>
                    Projects
                </Link>
                <Link
                    href="/"
                    className='flex gap-1'
                >
                    <span className='text-[1rem]'>&gt;</span>
                    About
                </Link>
                <Link
                    href="/"
                    className='flex gap-1'
                >
                    <span className='text-[1rem]'>&gt;</span>
                    Our Team
                </Link>
                <Link
                    href="/"
                    className='flex gap-1'
                >
                    <span className='text-[1rem]'>&gt;</span>
                    Contact
                </Link>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='font-bold md:text-[1.5rem] text-[1rem]'>Social Networks</h1>
                <div className='flex gap-3'>
                    <Link href="https://facebook.com" passHref legacyBehavior>
                        <a target="_blank">
                            <Image className='rounded-full h-[50px]'
                                src="/fblogo.png"
                                alt="fb logo"
                                width={50}
                                height={20}
                            />
                        </a>
                    </Link>
                    <Link href="https://www.youtube.com/@markyjayromualdez4219" passHref legacyBehavior>
                        <a target="_blank">
                            <Image className='rounded-full h-[50px]'
                                src="/ytlogo.png"
                                alt="yt logo"
                                width={50}
                                height={20}
                            />
                        </a>
                    </Link>
                    <Link href="https://instagram.com" passHref legacyBehavior>
                        <a target="_blank">
                            <Image className='rounded-full h-[50px]'
                                src="/insta.jpg"
                                alt="instagram logo"
                                width={50}
                                height={20}
                            />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
        <div className='h-[80px] bg-black opacity-[0.65] w-full md:px-12 px-5'>
            <div className='h-full flex justify-between items-center'>
                <h1 className='md:text-[1rem] text-[12px] w-[40%]'>Copyright © 2023 Metro Condo Living. All rights reserved.</h1>
                <div className='flex md:gap-3 gap-1 items-center w-[50%] justify-center'>
                    <Link href="/terms" className='md:text-[1rem] text-[10px]'>TERMS OF USE</Link>
                    <span>|</span>
                    <Link href="/policy" className='md:text-[1rem] text-[10px]'>PRIVACY POLICY</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
