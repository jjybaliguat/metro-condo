"use client"

import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React, { Fragment, useState } from 'react'

type TeamMember = {
    _id: string,
    name: string,
    role: string,
    description: string,
    photo: {
        id: String,
        webViewLink: String,
        webContentLink: String
    }
  }

const ViewTeamDetails = ({
    team
}: {
    team: TeamMember
}) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <button 
    className='rounded-[15px] p-2 flex flex-center outline outline-1 outline-primary'
    onClick={()=>setIsOpen(true)}
    >READ MORE</button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50"
            onClose={()=>setIsOpen(false)}
        >
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
            >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'
                    >
                        <Dialog.Panel className="relative w-full h-[100vh] overflow-y-auto 
                        transform bg-white text-left shadow-xl transition-all flex flex-col">
                            <div className='flex items-center justify-between h-[100px] w-full bg-secondary py-5 md:px-10 px-5'>
                                <div className=''>
                                    <h1 className='text-white text-[1.5rem] md:text-[2rem]'>MCL TEAM</h1>
                                </div>
                                <div className=''>
                                    <button
                                    type="button"
                                    onClick={()=>setIsOpen(false)}
                                    className="z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                                    >
                                        <XMarkIcon className="h-10 w-10 text-white font-bold" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col gap-3 bg-primary">
                                <div className='pt-10 md:px-20 lg:px-40 flex md:flex-row flex-col gap-6 items-center'>
                                    <div className='relative h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded-full'>
                                    <Image
                                        fill
                                        src={team?.photo? `https://drive.google.com/uc?export=view&id=${team?.photo?.id}` : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}
                                        alt=""
                                        style={{
                                        objectFit: "cover",
                                        objectPosition: "center"
                                        }}
                                        className='rounded-full'
                                    />
                                    </div>
                                    <div className='flex-1 md:p-10 p-5'>
                                        <div className='flex flex-col gap-4'>
                                            <h1 className='text-[2rem] text-black font-bold text-center md:text-left'>{team.name}</h1>
                                            <h1 className='text-[1.5rem] text-black font-bold text-center md:text-left'>{team.role}</h1>
                                            <p className='text-[1.3rem] text-white text-center md:text-left'>{team.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>
    </>
  )
}

export default ViewTeamDetails
