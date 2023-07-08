"use client"

import { motion, useAnimation, useInView } from 'framer-motion'
import React, { Fragment, useEffect, useRef } from 'react'
import { XMarkIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-scroll';
import { styled } from 'styled-components';

let useClickOutside = (handler: () => void) => {
    let domNode = useRef<any | null>();
  
    useEffect(() => {
      let maybeHandler = (event: { target: any; }) => {
        if (!domNode.current.contains(event.target)) {
          handler();
        }
      };
  
      document.addEventListener("mousedown", maybeHandler);
  
      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    });
  
    return domNode;
  };

  const CustomLink = styled(Link)`
    display: flex;
    align-items: center;
    box-shadow: 0 10px 8px rgb(0 0 0 / 0.04);
    padding: 2rem;
    border-radius: 5px;
    height: 2rem;
    cursor: pointer;
    &:hover{
        background-color: #b29c5b;
        color: #fff;
    };

    &.active{
        background-color: #b29c5b;
        color: #fff;
    }
  `

  const sideLinks = [
    {
        name: "LOCATION",
        href: "location",
        icon: <MapPinIcon className="h-6 w-6 text-gray-500" />,
    },
    {
        name: "AMENITIES",
        href: "amenities",
        icon: <MapPinIcon className="h-6 w-6 text-gray-500" />,
    },
    {
        name: "SITE PLAN",
        href: "site-plan",
        icon: <MapPinIcon className="h-6 w-6 text-gray-500" />,
    },
    {
        name: "UNIT LAYOUT",
        href: "layout",
        icon: <MapPinIcon className="h-6 w-6 text-gray-500" />,
    },
    {
        name: "3D VISUALIZATION",
        href: "3d-visualization",
        icon: <MapPinIcon className="h-6 w-6 text-gray-500" />,
    },
    {
        name: "SCHEMATIC",
        href: "schematic",
        icon: <MapPinIcon className="h-6 w-6 text-gray-500" />,
    },
  ]

const SideBar = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean,
    onClose: () => void,
}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation()

    useEffect(()=> {
        if(isInView){
            mainControls.start("visible")
        }
    }, [isInView])

    let domNode = useClickOutside(onClose);

  return (
    <div>
        {/* Black bg opacity 0.5 */}
        <motion.div 
        animate={{ width: isOpen ? "100vw" : "0"}}
        className='fixed right-0 h-[100vh] bg-black z-40 opacity-[0.5]'
        />
        <motion.div
        ref={domNode}
        animate={{ width: isOpen ? "250px" : "0"}}
        className={`fixed right-0 top-0 w-[150px] h-[100vh] bg-white z-50 mt-[70px]`}
        >
            <motion.div 
            animate={{ display: isOpen ? "block" : "none"}}
            className="absolute p-2 top-0 right-0 bg-white cursor-pointer"
            onClick={onClose}
            >
                <XMarkIcon className="h-8 w-8"/>
            </motion.div>
            {/* Main sidebar Links */}
            <div className="flex flex-col justify-center w-full h-full gap-2">
                {
                    sideLinks.map((item, index)=> (
                        <CustomLink
                            key={index}
                            to={item.href}
                            // className='h-[2rem] flex items-center p-8 text-black 
                            // hover:text-white hover:bg-primary bg-white cursor-pointer shadow-lg rounded-[5px]'
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500} 
                            delay={100}
                            onClick={onClose}
                        >
                            {item.name}
                        </CustomLink>
                    ))
                }
            </div>
        </motion.div>

    </div>
  )
}

export default SideBar
