"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import CustomButton from './CustomButton'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Avatar from './Avatar'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '@/lib/firebase'

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
  const [user, setUser] = useState(
    {
      name: '',
      email: '',
      photoUrl: '',
    }
  )
  const pathname = usePathname()
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => setShowMenu(!showMenu)

  const handleSignIn = async() => {
    try {
      const data = await signInWithPopup(auth, provider)
        if(data.user){
          setUser({
          name: data.user.displayName,
          email: data.user.email,
          photoUrl: data.user.photoURL,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    localStorage.setItem("user", user)
  }, [user])

  return (
    <header className='w-full sticky top-0 z-50 bg-white shadow-sm'>
        <nav className='max-w-[1440px] h-[70px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link
                href="/"
                className='flex items-center text-[12px] md:text-[1rem]'
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
              {!user && (
              <button
                  className='flex md:hidden justify-center py-2 w-full border border-[3px] border-primary rounded-full hover:scale-105'
                  onClick={handleSignIn}
              >
                Signin
              </button>
              )
              }
            </div>
            <div className='flex-center gap-2'>
                <CustomButton
                  title="Book Now"
                  containerStyles='bg-primary text-[10px] md:text-[1rem] text-white rounded-full hover:scale-105'
                  handleClick={()=>alert("This site is under development")}
                />
                {
                  !user && (
                    <button type="button"
                    onClick={handleSignIn}
                    className='hidden md:flex py-3 px-5 outline-none'>
                      Signin
                    </button>
                  )
                }
                {
                  user && (
                    <Avatar
                      size="small"
                      // img='/mypic.jpg'
                      style='cursor-pointer'
                    />
                  )
                }
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
