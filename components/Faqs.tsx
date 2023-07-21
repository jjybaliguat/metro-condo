"use client"

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function Faqs() {
  return (
    <>
    <div
        className='h-fit pb-[5rem] w-[100vw] py-6 bg-[#e8e8e8]'
    >
        <h1 className='section-title'>Frequently Ask Questions</h1>
        <div className="w-full px-4 pt-10">
        <div className="mx-auto w-full rounded-2xl p-2">
            <Disclosure>
            {({ open }) => (
                <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg shadow-lg bg-white px-4 py-4 text-left text-md font-medium 
                 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                    <span>What is your refund policy?</span>
                    <ChevronUpIcon
                    className={`${
                        open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-black`}
                    />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    If you're unhappy with your purchase for any reason, email us
                    within 90 days and we'll refund you in full, no questions asked.
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
            {({ open }) => (
                <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg shadow-lg bg-white px-4 py-4 text-left text-md font-medium 
                 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                    <span>Do you offer technical support?</span>
                    <ChevronUpIcon
                    className={`${
                        open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-black`}
                    />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Yes.
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>
        </div>
        </div>
    </div>
    </>
  )
}
