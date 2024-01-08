"use client";
import React from 'react';
import HeroImg from '../img/HeaderEdit4Resize.png';
import Image from 'next/image';

export default function Header() {
    return (
        
            <div className="fixed">
                <Image
                    className=''                
                    width={2930}
                    height={924}
                    src={HeroImg}   
                    quality={100}                 
                    objectFit='cover'
                    alt='Man with hands overlapping the top of the webpage as if he is holding onto it'
                />
            </div>
            
            
    )
};