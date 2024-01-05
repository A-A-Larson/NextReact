"use client";
import React from 'react';
import HeroImg from '../img/HeaderEdit4Resize.png';
import Hands from '../img/HandsResize2.png';
import Image from 'next/image';

export default function Header() {
    return (
        <div 
        className=''
        >
            
            {/* <div
            style={{
                backgroundImage: `url(${HeroImg.src})`,
                height: '100%',
                width: '100%',
                position: 'fixed',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                zIndex: ''
            }}
            >

            </div> */}
            <div className="absolute">
                <Image
                    className='fixed'                
                    width={2930}
                    height={924}
                    src={HeroImg}
                    
                    objectFit='cover'
                    alt='Man with hands overlapping the top of the webpage as if he is holding onto it'
                />
            </div>
            
            <div className=''>
                <Image       
                    className='relative z-2'         
                    width={2930}
                    height={924}
                    src={Hands}
                    alt='Floating hands'
                />
            </div>
            
        </div>
    )
};