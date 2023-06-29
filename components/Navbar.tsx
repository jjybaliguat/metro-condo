"use client"
import React from 'react'
import Link from 'next/link'
import CustomButton from './CustomButton'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const NavLinks = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "PROJECTS",
    href: "/projects",
  },
  {
    title: "ABOUT",
    href: "/about",
  },
  {
    title: "OUR TEAM",
    href: "/team",
  },
  {
    title: "CONTACT",
    href: "/contact",
  },
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className='w-full absolute z-30 bg-white'>
        <nav className='max-w-[1440px] h-[70px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link
                href="/"
                className=''
            >
                METRO CONDO LIVING
            </Link>
            <div className='lg:flex gap-10 hidden'>
              {
                NavLinks.map((item, index)=>(
                  <Link
                    key={index}
                    className={pathname === item.href ? `text-primary font-bold` : ''}
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                ))
              }
            </div>
            <div className='flex-center gap-2'>
                <CustomButton
                  title="Book Now"
                  containerStyles='bg-primary text-white rounded-full hover:scale-105'
                  handleClick={()=>alert("This site is under development")}
                />
                <CustomButton
                  title="Login"
                  containerStyles='hidden lg:flex'
                  handleClick={()=>alert("This site is under development")}
                />
                <Image
                  className='flex lg:hidden cursor-pointer'
                  onClick={()=>alert("this site is under development")}
                  src="/menubar.svg"
                  alt="menubar"
                  height={30}
                  width={30}
                />
            </div>
        </nav>
    </header>
  )
}

export default Navbar
