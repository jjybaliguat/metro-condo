"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import CustomButton from './CustomButton'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '@/lib/firebase'
import {Link as LinkS} from 'react-scroll'
import { styled } from 'styled-components'
import { useDispatch } from 'react-redux'
import { logIn } from '@/redux/features/auth-slice'
import { AppDispatch, useAppSelector } from '@/redux/store'
import ProfileDropDown from './ProfileDropDown'
import SearchDialog from './SearchDialog'

const NavLinks = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "BUILDERS",
    href: "/builders",
  },
  // {
  //   title: "PROJECTS",
  //   href: "/projects",
  // },
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

const CustomLink = styled(LinkS)`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &.active{
    color: #b29c5b;
    font-weight: bold;
  }
  &.hover{
    color: #b29c5b;
  }
`

const Navbar = () => {
  const pathname = usePathname()
  const [showMenu, setShowMenu] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const isAuth = useAppSelector((store)=>store.auth.value?.isAuth)
  const router = useRouter()

  const toggleMenu = () => setShowMenu(!showMenu)

  const handleSignIn = async() => {
    try {
      const data = await signInWithPopup(auth, provider)
      const user = {
        name: data.user?.displayName,
        email: data.user?.email,
        photo: data.user?.photoURL,
        uid: data.user?.uid,
      }
      dispatch(logIn(user))
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(()=> {
  //   localStorage.setItem("user", user)
  // }, [user])

  return (
    <>
    <header className='w-full sticky top-0 z-50 bg-white shadow-lg'>
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
                <span className='hidden md:flex'>METRO CONDO LIVING</span>
                <span className='md:hidden flex text-[1.2rem]'>MCL</span>
            </Link>
            <div className={`flex lg:flex-row flex-col gap-5 absolute lg:static duration-500 
            lg:min-h-fit left-0 lg:w-auto w-full items-center px-5 z-50
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
              {isAuth ? (
                <ProfileDropDown 
                style='flex md:hidden'
                />
                )
                : (
                <button
                className='flex md:hidden justify-center py-2 w-full border-[3px] border-primary rounded-full hover:scale-105'
                onClick={handleSignIn}
                >
                  Sign in
                </button>
                )
                }
            </div>
            <div className='flex-center gap-1'>
                <CustomButton
                  title="Search Property"
                  textStyles='mr-1 text-[14px]'
                  rightIcon={<MagnifyingGlassIcon className="h-5 w-5 text-white" />}
                  containerStyles='bg-primary p-2 text-[10px] md:text-[1rem] text-white rounded-full hover:scale-105'
                  handleClick={()=>router.push("/property")}
                />
                {isAuth ? (
                    <ProfileDropDown
                    style='md:flex hidden' 
                    />
                ) : (
                    <button type="button"
                      onClick={handleSignIn}
                      className='hidden md:flex py-3 px-5 outline-none'>
                        Sign in
                    </button>
                )
                }
                {
                  showMenu ? 
                  <XMarkIcon 
                  onClick={toggleMenu}
                  className="h-8 w-8 text-black flex lg:hidden" /> 
                  : 
                  <Bars3Icon 
                  onClick={toggleMenu}
                  className="h-8 w-8 text-black flex lg:hidden" />
                }
            </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar
