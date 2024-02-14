"use client";
import React, { useState, useEffect } from 'react';
import HeroImg from '../img/HeaderEdit4Resize.png';
import Image from 'next/image';

export default function Landing() {
    return (
        <div className='min-h-screen grid'>
            <Image
                className=''                
                width={2930}
                height={924}
                src={HeroImg}   
                quality={100}
                alt='Man with hands overlapping the top of the webpage as if he is holding onto it'
            />
            
            <div 
                className='
                    bg-inherit
                    flex
                    justify-center
                    '
            > 
                <header 
                    className='
                        text-lightHdrClr 
                        dark:text-darkHdrClr                    
                        '
                >       
                    <h1 
                        className='
                            text-left
                            text-base'                    
                        id='first-section' 
                    >                    
                        Hi, I'm 
                    </h1>    

                    <h2
                        className='
                            font-mono  
                            text-5xl 
                            font-bold
                            tracking-tighter
                            leading-snug'
                    >
                        Andrew Larson
                    </h2>                             
                </header>   
            </div> 
        </div>
    )
}