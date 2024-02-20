"use client";
import React from 'react';
import AboutImg from '../img/aboutMe.jpg';
import Image from 'next/image';

export default function AboutMe() {

    return(
    <section
        className='flex flex-col justify-center md:flex-row px-24 '
    >
        <Image
                className='m-auto rounded-full max-w-sm'                
                width={718}
                height={718}
                src={AboutImg}   
                quality={100}
                alt='Man staring out a window on a train'
        />

        <div className='m-auto'>
            <p>
                I have 18 years of experience troubleshooting everything from cars to xrays. Now I'm making a career change to Web Developement so I can continue to learn and problem solve as I get too old to turn wrenches. 
            </p>
        </div>
    </section>
    )
    
};