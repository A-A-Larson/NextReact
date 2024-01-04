"use client";
import React from 'react';
import HeroImg from '../img/HeaderEdit4Resize.png';
import Hands from '../img/HandsResize.png';
import Image from 'next/image';

export default function Header() {
    return (
        <div>
            
            <Image
                className='fixed -z-10'                
                width={2930}
                height={924}
                src={HeroImg}
                alt='Man with hands overlapping the top of the webpage as if he is holding onto it'
            />
            <Image       
                className='z-0'         
                width={2930}
                height={924}
                src={Hands}
                alt='Floating hands'
            />
            
            
            <h1
                className=''
            >Andrew Larson</h1>
        </div>
    )
};