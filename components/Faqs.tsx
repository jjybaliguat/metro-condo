"use client"

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const FaqsList = [
    {
        question: "How much is the downpayment for ready for occupancy unit?",
        answers: ["- The downpayment for ready for occupancy unit is 5% to 10% of the total contract price or 300,000 depends on the project"]
    },
    {
        question: "How long is the turn over of pre-selling project?",
        answers: ["- The expected turn over for pre-selling project is waiting at least 3 years."]
    },
    // {
    //     question: "What are the available locations?",
    //     answer: ""
    // },
    {
        question: "Can the Overseas Filipino Worker (OFW) buy the property?",
        answers: ["- Yes, we also have free online viewing for them"]
    },
    {
        question: "How much are condo fees and what do they cover?",
        answers: ["-₱80–₱150 per sqm monthly. \nCovers security, maintenance, and shared utilities. \nNote: Water, electricity, and internet are paid separately."]
    },
    {
        question: "Is buying a pre-selling condo safe?",
        answers: ["-Yes, if the developer is trusted and permits are complete. It’s cheaper and offers flexible terms, but watch out for delays or changes."]
    },
    {
        question: "Which is better: RFO or Pre-selling condo?",
        answers: ["—RFO (Ready for Occupancy): Move in right away, good for urgent housing. ", "Pre-selling: Lower price and flexible terms, but with waiting time.", "Tip: Choose RFO if you need it soon; Pre-selling if you’re investing."]
    },
    {
        question: "Can I rent out my condo if I’m not using it?",
        answers: ["-Yes, most developers allow rentals. It’s a good way to earn income.", "ROI Tip: Payback time depends on location, rent rate, and loan terms."]
    },
    {
        question: "What are the requirements to buy a condo?",
        answers: ["-Basic requirements include:", "1. Valid government-issued ID. ", "2. Proof of income or employment.", "3. Reservation fee and downpayment ", "Good news: Most developers allow installment payments for downpayment."]
    },
    {
        question: "Is it safe to live in a condo?",
        answers: ["Yes. Most condos have: ", "-24/7 security guards ", "-CCTV in common areas ", "-Secure entry points"]
    },
    {
        question: "What is the lifespan of a condo building?",
        answers: ["-Usually 50 years or more, depending on maintenance and building quality. ", "Tip: Condo corporations can vote to renovate or redevelop the building."]
    },
]

export default function Faqs() {
    const [viewAll, setViewAll] = useState(false)
    const toggleViewAll = () => setViewAll(!viewAll)

  return (
    <>
    <div className='w-full bg-[#e8e8e8]'>
    <div
        className='h-fit px-5 pb-[5rem] w-[100vw] py-12 mx-auto max-w-7xl'
    >
        <h1 className='section-title'>Frequently Ask Questions</h1>
        <div className="w-full px-4 pt-10">
        <div className="mx-auto w-full rounded-2xl p-2">
            <Disclosure as="div" className="mt-2" defaultOpen>
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
            {viewAll? (
                FaqsList.map((faq, index)=>(
                    <Disclosure as="div" className="mt-2" defaultOpen={index == 0}>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg shadow-lg bg-white px-4 py-4 text-left font-medium 
                        focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                            <span className='text-gray-700 leading-relaxed text-sm md:text-base'>{faq.question}</span>
                            <ChevronUpIcon
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2">
                            {faq.answers.map((answer)=> (
                                <p className='text-gray-700 leading-relaxed text-sm md:text-base'>{answer}</p>
                            ))}
                        </Disclosure.Panel>
                        </>
                    )}
                    </Disclosure>
                ))
            ) : (
                FaqsList.slice(0, 5).map((faq, index)=>(
                    <Disclosure as="div" className="mt-2" defaultOpen={index == 0}>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg shadow-lg bg-white px-4 py-4 text-left font-medium 
                        focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                            <span className='text-gray-700 leading-relaxed text-sm md:text-base'>{faq.question}</span>
                            <ChevronUpIcon
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2">
                            {faq.answers.map((answer)=> (
                                <p className='text-gray-700 leading-relaxed text-sm md:text-base'>{answer}</p>
                            ))}
                        </Disclosure.Panel>
                        </>
                    )}
                    </Disclosure>
                ))
            )}
            <div className="mt-6 text-center">
            <button
                onClick={toggleViewAll}
                className="px-6 py-2 bg-white text-secondary font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
            >
                {viewAll ? "View Less" : "View More"}
            </button>
            </div>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}
