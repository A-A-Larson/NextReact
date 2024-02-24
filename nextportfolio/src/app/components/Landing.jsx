"use client";
import React, { useState, useEffect } from 'react';
import HeroImg from '../img/HeaderEdit4Resize.png';
import Image from 'next/image';

export default function Landing() {
    return (
        <section className='flex flex-col border-b'>
            <Image
                className=''                
                width={2930}
                height={924}
                src={HeroImg}   
                quality={100}
                alt='Man with hands overlapping the top of the webpage as if he is holding onto it'
            />            
            
            <header 
                className='
                    text-lightHdrClr 
                    dark:text-darkHdrClr  
                    flex
                    flex-col                   
                    grow    
                    justify-center
                    items-center                                   
                    '
            >       
                <h1 
                    className='
                        text-base
                        sm:text-xl
                        flex
                        flex-col
                        justify-center
                        items-center
                        
                        ' 
                > 
                    <div
                        className='                            
                            mr-auto'    
                    >                 
                        Hi, I'm 
                    </div>  
                    <br/>  
                    <div
                        className='
                              
                            text-5xl
                            sm:text-6xl 
                            font-black
                            tracking-tighter
                            leading-snug
                            text-center
                            '
                    >
                        Andrew Larson
                    </div>
                </h1>                             
            </header>             
        </section>
    )
}