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


const emailApiUrl = process.env.NEXT_PUBLIC_NODE_ENV == "development" ? 'http://localhost:8000/api/email/message' : 'https://metro-api.rdnaksnds.com/api/email/message'

const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    try {
        const response: any = await axios.post(emailApiUrl, {
            fromAddress: 'MCL Quotes<builders@metrocondoliving.com>',
            toAddress: 'builders@metrocondoliving.com',
            subject: `Quote from ${messageData.name}`,
            message: `<div>
            <h1>Name: <strong>${messageData.name}</strong></h1>
            <h1>Email: <strong>${messageData.email}</strong></h1>
            <h1>Phone: <strong>${messageData.contact}</strong></h1>
            <h1>Address: <strong>${messageData.address}</strong></h1>
            <div style="margin-top: 25px">
                <h1>Message: </h1>
                <h1 style="text-align: center">${messageData.message}</h1>
            </div>
            </div>`
        })
        if(response?.data){
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
    className='h-fit pb-[5rem] w-full py-5' 
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
                                <h1 className='text-[1rem]'>632 Shaw Blvd, Mandaluyong, 1550 Metro Manila</h1>
                            </div>
                        </div>
                        <div className='flex md:flex-row flex-col md:items-center md:gap-5 gap-1'>
                            <div className='h-[2rem] w-[2rem] rounded-full bg-primary p-1'>
                                <EnvelopeIcon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className='font-medium text-[2rem]'>Email</h1>
                                <h1 className='text-[1rem]'>builders@metrocondoliving.com</h1>
                            </div>
                        </div>
                        <div className='flex md:flex-row flex-col md:items-center md:gap-5 gap-1'>
                            <div className='h-[2rem] w-[2rem] rounded-full bg-primary p-1'>
                                <PhoneIcon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className='font-medium text-[2rem]'>Phone</h1>
                                <h1 className='text-[1rem]'>09159828384</h1>
                            </div>
                        </div>
                        <div
                            className='h-[12rem] w-full'
                        >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.26888778488!2d121.04789967400892!3d14.583748277491235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8394a420d2d%3A0x254aa51e3ad54dff!2s632%20Bulebar%20Shaw%2C%20Mandaluyong%2C%201552%20Kalakhang%20Maynila!5e0!3m2!1sfil!2sph!4v1688742256504!5m2!1sfil!2sph" 
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
                        placeholder='Your address'
                        value={messageData.address}
                        onChange={(e)=>setMessageData({...messageData, address: e.target.value})}
                        required
                    />
                    <div className="flex flex-col md:flex-row gap-3">
                        <input
                            type='text'
                            className='w-full p-3 rounded-md outline-none focus:outline-2 focus:outline-primary shadow-md'
                            placeholder='Contact Number'
                            value={messageData.contact}
                            onChange={(e)=>setMessageData({...messageData, contact: e.target.value})}
                            required
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
                        title={submitting? 'Sending...' : 'Submit'}
                        rightIcon={<Spin className={submitting ? 'flex' : 'hidden'} />}
                        containerStyles='bg-primary'
                        textStyles='text-white'
                    />
                    {error != null && (!error? (<div className='mt-5'>
                        <p className='text-success'>Your message has been sent to us. Thank you.</p>
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
