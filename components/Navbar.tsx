"use client"
import React, { useState } from 'react'
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
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => setShowMenu(!showMenu)

  return (
    <header className='w-full sticky top-0 z-50 bg-white shadow-sm'>
        <nav className='max-w-[1440px] h-[70px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link
                href="/"
                className='flex items-center'
            >
                <Image
                  src="/logo.png"
                  alt="logo"
                  height={50}
                  width={50}
                  className='object-contain'
                />
                <span>METRO CONDO LIVING</span>
            </Link>
            <div className={`flex md:flex-row flex-col md:gap-10 gap-5 absolute md:static duration-500 
            md:min-h-fit left-0 md:w-auto w-full items-center px-5 z-30
            py-10 md:py-3
            ${showMenu ? 'top-[70px] bg-white' : 'top-[-1000px]'}`}>
              {
                NavLinks.map((item, index)=>(
                  <Link
                    key={index}
                    className={pathname === item.href ? `text-primary font-bold` : 'hover:text-primary'}
                    href={item.href}
                    onClick={toggleMenu}
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
                <button type="button" className='hidden md:flex py-3 px-5 outline-none'>
                  Login
                </button>
                <Image
                  className='flex md:hidden cursor-pointer'
                  onClick={toggleMenu}
                  src={showMenu ? '/close.svg' : '/menubar.svg'}
                  alt="menubar"
                  height={35}
                  width={35}
                />
            </div>
        </nav>
    </header>
  )
}

export default Navbar
