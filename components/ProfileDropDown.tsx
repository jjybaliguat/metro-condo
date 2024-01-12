"use client"
import { AppDispatch, useAppSelector } from '@/redux/store'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import React, {Fragment} from 'react'
import { Avatar } from 'antd'
import { signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useDispatch } from 'react-redux'
import { logOut } from '@/redux/features/auth-slice'

const ProfileDropDown = ({
    style
}: {
    style?: string
}) => {
    const user = useAppSelector(store=>store.auth.value?.user)
    const dispatch = useDispatch<AppDispatch>()

    const handleLogout = async() => {
        try {
            await signOut(auth)
            dispatch(logOut())
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
    <Menu as="div" className={`relative inline-block text-left ${style}`}>
        <div>
          <Menu.Button className="inline-flex w-full justify-center px-4 py-2">
            <Avatar 
                className='cursor-pointer'
                size={35}
                icon={<img src={user?.photo} />}
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-14 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
            <Menu.Item>
                  <div
                    className='text-gray-900 group flex flex-col w-full rounded-md px-2 py-2 text-sm'
                  >
                    <h1 className='font-bold'>{user?.name}</h1>
                    <p className='text-[12px]'>{user?.email}</p>
                  </div>
              </Menu.Item>
            <Menu.Item>
                {({ active }) => (
                  <Link href="/profile">
                    <button
                      className={`${
                        active ? 'bg-secondary-100 text-black' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Profile Settings
                    </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
            <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-secondary-100 text-black' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}

export default ProfileDropDown
