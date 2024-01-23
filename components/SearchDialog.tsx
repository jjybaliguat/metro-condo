"use client"

import React, { useState } from 'react'
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from "@heroicons/react/24/outline";
import SelectPropertyType from './SelectPropertyType';
import CustomButton from './CustomButton';
import SelectLocation from './SelectLocation';
import { useRouter } from 'next/navigation';

const Types = [
    "All Properties",
    "Transit-Oriented",
    "Urban Resort",
    "Condominium",
  ]
  
  const locations = [
    "All Locations",
    "Makati City",
    "Mandaluyong City",
    "Manila City",
    "Pasig City",
    "San Juan City",
    "Sta. Rosa City, Laguna",
    "Pasig City - Cainta",
  ]


const SearchDialog = ({
    isOpen,
    closeModal,
}: {
    isOpen: boolean,
    closeModal: () => void
}) => {

    const [propertyType, setPropertyType] = useState('')
    const [location, setLocation] = useState('')
    const router = useRouter()

    const handleSubmit = () => {
        alert("under development")
    }
  return (
    <>
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50"
            onClose={closeModal}
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
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'
                    >
                        <Dialog.Panel className="relative w-full 
                        max-w-lg max-h-[90vh] overflow-y-auto 
                        transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col">
                            <button
                                type="button"
                                onClick={closeModal}
                                className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                            >
                                <XMarkIcon className="h-6 w-6 text-gray-500" />
                            </button>
                            <div className="flex-1 flex flex-col gap-3">
                                <h1 className='font-bold text-center text-[1.5rem]'>Search Properties</h1>
                                <SelectPropertyType
                                    options={Types}
                                    containerStyle='w-full p-3 z-20'
                                    selected={propertyType}
                                    handleSelect={setPropertyType}
                                />
                                <SelectLocation
                                    options={locations}
                                    containerStyle='w-full p-3 z-10'
                                    selected={location}
                                    handleSelect={setLocation}
                                />
                                <CustomButton
                                    title='Search'
                                    containerStyles='bg-primary rounded-full cursor-pointer'
                                    isDisabled={propertyType === '' || location === ''}
                                    handleClick={()=>router.push(`/property?location=${location}&type=${propertyType}`)}
                                    textStyles='text-white font-bold'
                                />
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

export default SearchDialog
