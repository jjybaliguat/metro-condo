"use client"

import React, { useEffect, useState } from 'react'
import { MapPinIcon } from "@heroicons/react/24/solid";
import Select from './Select';
import CustomButton from './CustomButton';
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";


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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert("form submitted")
    }


  return (
    <>
        <div id="contact"
        className='h-fit pb-[5rem] w-full py-6'
        >
            <h1 className='section-title'>Contact Us</h1>
            <div className="flex flex-col-reverse md:flex-row items-center gap-5 mx-auto w-full max-w-[90vw] mt-5">
                {/* Location Section */}
                <div className='flex flex-col gap-5 md:w-[35%] w-[90%] bg-[#e8e8e8] shadow-lg p-6 rounded-lg'>
                    <div className='flex flex-row items-center gap-5'>
                        <div className='h-[2rem] w-[2rem] rounded-full bg-primary p-1'>
                            <MapPinIcon className="h-full w-full text-white" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className='font-medium text-[2rem]'>Location</h1>
                            <h1 className='text-[1rem]'>Some location...</h1>
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-5'>
                        <div className='h-[2rem] w-[2rem] rounded-full bg-primary p-1'>
                            <EnvelopeIcon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className='font-medium text-[2rem]'>Email</h1>
                            <h1 className='text-[1rem]'>metrocondolifestyle@gmail.com</h1>
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-5'>
                        <div className='h-[2rem] w-[2rem] rounded-full bg-primary p-1'>
                            <PhoneIcon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className='font-medium text-[2rem]'>Phone</h1>
                            <h1 className='text-[1rem]'>N/A</h1>
                        </div>
                    </div>
                    <div
                        className='h-[12rem] w-full'
                    >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1930.691967493682!2d121.05141643404379!3d14.57718539960508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9ea6617a3f9%3A0xfd9a22b17a0b4a75!2sFame%20Residences%20Tower%202!5e0!3m2!1sfil!2sph!4v1688712870496!5m2!1sfil!2sph"  
                        style={{border:0, width: "100%", height: "100%"}}
                        allowFullScreen={false} 
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
                        <Select
                            // title='Select Income Source'
                            options={incomeSources}
                            containerStyle='w-full rounded-md outline-none focus:outline-2 focus:outline-primary'
                            selected={messageData.incomeSource}
                            handleSelect={(e) => setMessageData({...messageData, incomeSource: e})}
                        />
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
                        title='Submit'
                        containerStyles='bg-primary'
                        textStyles='text-white'
                    />
                </form>
            </div>
        </div>
    </>
  )
}

export default Contact
