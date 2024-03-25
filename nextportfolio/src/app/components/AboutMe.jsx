"use client";
import React from 'react';
import AboutImg from '../img/aboutMe.jpg';
import Image from 'next/image';

export default function AboutMe() {

    return(
    <section
        className='
                flex 
                flex-col
                md:flex-row
                justify-around
                items-center
                border-b
                p-8
                '
    >
        <div className='max-w-md flex-1'>
            <Image
                    className='
                        rounded-full
                        shadow-2xl
                        shadow-gray-900                     
                        '                
                    width={718}
                    height={718}
                    src={AboutImg}   
                    quality={100}
                    alt='Man staring out a window on a train'
            />
        </div>
        <div className='pt-12 text-lg md:pt-0 md:pl-12 xl:pl-0 max-w-xl flex-1'>
            <p className=''>
                I have 18 years of experience troubleshooting everything from cars to xrays. Now I'm making a career change to Web Developement so I can continue to learn and problem solve as I get too old to turn wrenches. 
            </p>
        </div>
    </section>
    )
    
};