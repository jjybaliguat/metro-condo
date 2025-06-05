"use client"

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FaqsList = [
    {
        question: "How much is the downpayment for ready for occupancy unit?",
        answer: "- The downpayment for ready for occupancy unit is 5% to 10% of the total contract price or 300,000 depends on the project"
    },
    {
        question: "How long is the turn over of pre-selling project?",
        answer: "- The expected turn over for pre-selling project is waiting at least 3 years."
    },
    // {
    //     question: "What are the available locations?",
    //     answer: ""
    // },
    {
        question: "Can the Overseas Filipino Worker (OFW) buy the property?",
        answer: "- Yes, we also have free online viewing for them"
    }
]

export default function Faqs() {
  return (
    <>
    <div className='w-full bg-[#e8e8e8]'>
    <div
        className='h-fit px-5 pb-[5rem] w-[100vw] py-12 mx-auto max-w-7xl'
    >
        <h1 className='section-title'>Frequently Ask Questions</h1>
        <div className="w-full px-4 pt-10">
        <div className="mx-auto w-full rounded-2xl p-2">
            {FaqsList.map((faq, index)=>(
                <Disclosure as="div" className="mt-2" defaultOpen={index == 0}>
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg shadow-lg bg-white px-4 py-4 text-left text-md font-medium 
                    focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                        <span>{faq.question}</span>
                        <ChevronUpIcon
                        className={`${
                            open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        {faq.answer}
                    </Disclosure.Panel>
                    </>
                )}
                </Disclosure>
            ))}
            <Disclosure as="div" className="mt-2">
            {({ open }) => (
                <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg shadow-lg bg-white px-4 py-4 text-left text-md font-medium 
                focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                    <span>What are the available locations?</span>
                    <ChevronUpIcon
                    className={`${
                        open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-black`}
                    />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    AVAILABLE LOCATIONS:

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-4'>
                        <span> 📌 Pasig City </span>
                        <span> 📌 Mandaluyong City</span>
                        <span> 📌 San Juan City</span>
                        <span> 📌 Makati City</span>
                        <span> 📌 Manila City</span>
                        <span> 📌 Nearby BGC</span>
                        <span> 📌 Cainta</span>
                    </div>
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}
