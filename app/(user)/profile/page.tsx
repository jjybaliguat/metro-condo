"use client"

import { useAppSelector } from '@/redux/store'
import Avatar from 'antd/es/avatar/avatar'
import Image from 'next/image'
import React from 'react'

const UserProfile = () => {
    const user = useAppSelector((store)=>store.auth.value.user)
  return (
    <>
        <div className="p-8">
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='flex flex-col gap-10 items-center w-full md:w-fit h-fit p-10 rounded-lg shadow-2xl'>
                    <div className='flex flex-col items-center gap-3'>
                        <img src={user.photo} alt="user photo" width={150} height={150}
                        className='rounded-full'/>
                        <div className='flex flex-col gap-1 items-center'>
                            <h1 className='text-[20px] text-center'>{user.name}</h1>
                            <p className='text-gray-500 text-center'>{user.email}</p>
                        </div>
                    </div>
                    <button className="btn-primary">Sign Out</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserProfile
