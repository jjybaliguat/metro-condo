"use client"

import CustomButton from '@/components/CustomButton'
import Select from '@/components/Select'
import { PageWrapper } from '@/helpers/page-wrapper'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { Spin, message } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'

const incomeSources = [
  "Employed",
  "Self Employed",
  "Business",
  "Venture",
  "Trust Funds",
  "Investmemts",
  "Others",
]

const Contact = () => {
  const [messageData, setMessageData] = useState({
    name: '',
    email: '',
    address: '',
    contact: '',
    incomeSource: 'Employed',
    message: ''
})
const [submitting, setSubmitting] = useState(false)
const [error, setError] = useState<any | null>()


// const emailApiUrl = process.env.NEXT_PUBLIC_NODE_ENV == "development" ? 'http://localhost:3000/api/send-email' : 'https://metrocondoliving.com/api/send-email'

const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: messageData.name,
                email: messageData.email,
                contact: messageData.contact,
                address: messageData.address,
                message: messageData.message,
            }),
            });

        const data = await response.json()

        if(!response.ok){
            setError(true)
        }else{
            if(data.success){
                setSubmitting(false)
                setError(false)
                setMessageData({
                    name: '',
                    email: '',
                    address: '',
                    contact: '',
                    incomeSource: 'Employed',
                    message: ''
                })
            }else{
                setError(true)
                setSubmitting(false)
            }
        }
    } catch (error) {
        console.log(error)
        setSubmitting(false)
        setError(true)
    }
}


return (
<>
  <PageWrapper>
    <div
    className='h-fit w-full px-5 py-12 mx-auto max-w-7xl' 
    >
        {/* <div className='absolute h-full w-full bg-white opacity-[0.7] z-0' /> */}
        <div className="flex flex-col">
            <h1 className='section-title'>Contact Us</h1>
            <div className="flex flex-col-reverse md:flex-row items-center gap-5 mx-auto w-full max-w-[90vw] mt-5">
                {/* Location Section */}
                <div className='flex flex-col gap-5 md:w-[35%] w-[90%] bg-[#e8e8e8] shadow-lg p-6 rounded-lg'>
                        <div className='flex md:flex-row flex-col md:items-center md:gap-5 gap-1'>
                            <div className='h-[2rem] w-[2rem] rounded-full bg-primary p-1'>
                                <MapPinIcon className="h-full w-full text-white" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className='font-medium text-[2rem]'>Location</h1>
                                <h1 className='text-[1rem]'>Libertad Heights, Mandaluyong City</h1>
                            </div>
                        </div>
                        <div className='flex md:flex-row flex-col md:items-center md:gap-5 gap-1'>
                            <div className='h-[2rem] w-[2rem] rounded-full bg-primary p-1'>
                                <EnvelopeIcon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className='font-medium text-[2rem]'>Email</h1>
                                <h1 className='text-[1rem]'>builders@metrocondoliving.com</h1>
                                <h1 className='text-[1rem]'>metrocondolifestyle@gmail.com</h1>
                            </div>
                        </div>
                        <div className='flex md:flex-row flex-col md:items-center md:gap-5 gap-1'>
                            <div className='h-[2rem] w-[2rem] rounded-full bg-primary p-1'>
                                <PhoneIcon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className='font-medium text-[2rem]'>Phone</h1>
                                <h1 className='text-[1rem]'>+63 915 982 8384</h1>
                            </div>
                        </div>
                        <div
                            className='h-[12rem] w-full'
                        >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4198.2122415921085!2d121.050423!3d14.5791385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c91e828ce7d3%3A0xd950b5126f21d98a!2sLibertad%20Heights!5e1!3m2!1sfil!2sph!4v1749014986414!5m2!1sfil!2sph" 
                            allowFullScreen={false}
                            style={{border:0, width: "100%", height: "100%"}}
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                {/* contact form section */}
                <form onSubmit={handleSubmit}
                    className="flex flex-col gap-5 h-fit bg-[#e8e8e8] shadow-lg p-6 rounded-lg md:w-[65%] w-[90%]"
                >
                    <div className="flex flex-col md:flex-row gap-3">
                        <input
                            type='text'
                            className='w-full p-3 rounded-md outline-none focus:outline-2 focus:outline-primary shadow-md'
                            placeholder='Your name'
                            value={messageData.name}
                            onChange={(e)=>setMessageData({...messageData, name: e.target.value})}
                            required
                        />
                        <input
                            type='email'
                            className='w-full p-3 rounded-md outline-none focus:outline-2 focus:outline-primary shadow-md'
                            placeholder='Your email'
                            value={messageData.email}
                            onChange={(e)=>setMessageData({...messageData, email: e.target.value})}
                            required
                        />
                    </div>
                    <input
                        type='text'
                        className='w-full p-3 rounded-md outline-none focus:outline-2 focus:outline-primary shadow-md'
                        placeholder='Your address (optional)'
                        value={messageData.address}
                        onChange={(e)=>setMessageData({...messageData, address: e.target.value})}
                        // required
                    />
                    <div className="flex flex-col md:flex-row gap-3">
                        <input
                            type='text'
                            className='w-full p-3 rounded-md outline-none focus:outline-2 focus:outline-primary shadow-md'
                            placeholder='Contact Number (optional)'
                            value={messageData.contact}
                            onChange={(e)=>setMessageData({...messageData, contact: e.target.value})}
                            // required
                        />
                        {/* <Select
                            // title='Select Income Source'
                            options={incomeSources}
                            containerStyle='w-full rounded-md outline-none focus:outline-2 focus:outline-primary'
                            selected={messageData.incomeSource}
                            handleSelect={(e) => setMessageData({...messageData, incomeSource: e})}
                        /> */}
                    </div>
                    <textarea
                        className='w-full h-[10rem] p-3 rounded-md outline-none focus:outline-2 focus:outline-primary shadow-md'
                        placeholder='Message'
                        value={messageData.message}
                        onChange={(e)=>setMessageData({...messageData, message: e.target.value})}
                        required
                    />
                    <CustomButton
                        btnType='submit'
                        // isDisabled={true}
                        title={submitting? 'Sending...' : 'Submit'}
                        rightIcon={<Spin className={submitting ? 'flex' : 'hidden'} />}
                        containerStyles='bg-primary'
                        textStyles='text-white'
                    />
                    {error != null && (!error? (<div className='mt-5'>
                        {!submitting && <p className='text-success'>Your message has been sent to us. Thank you.</p>}
                    </div>) : (
                        <p className='text-danger'>Error sending message</p>
                    ) )} 
                </form>
            </div>
        </div>
    </div>
  </PageWrapper>
</>
)
}

export default Contact
