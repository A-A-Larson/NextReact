"use client";
import React from 'react';
import AboutImg from '../img/aboutMe.jpg';
import Image from 'next/image';

export default function AboutMe() {

    return(
    <div
        className='min-h-screen flex flex-col justify-evenly'
    >
        <Image
                className='p-4 m-auto rounded-full'                
                width={718}
                height={718}
                src={AboutImg}   
                quality={100}
                alt='Man with hands overlapping the top of the webpage as if he is holding onto it'
        />

        <div className='p-14'>
            <p>
                I have 18 years of experience troubleshooting everything from cars to xrays. Now I'm making a career change to Web Developement so I can continue to learn and problem solve as I get too old to turn wrenches. 
            </p>
        </div>
    </div>
    )
    
};