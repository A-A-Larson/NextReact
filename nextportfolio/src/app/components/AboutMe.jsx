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
                items-center
                justify-center 
                p-12
                '
    >
        <Image
                className='
                    rounded-full
                    
                    '                
                width={718}
                height={718}
                src={AboutImg}   
                quality={100}
                alt='Man staring out a window on a train'
        />

        <div className='pt-12 text-lg md:pt-0 md:pl-12'>
            <p>
                I have 18 years of experience troubleshooting everything from cars to xrays. Now I'm making a career change to Web Developement so I can continue to learn and problem solve as I get too old to turn wrenches. 
            </p>
        </div>
    </section>
    )
    
};