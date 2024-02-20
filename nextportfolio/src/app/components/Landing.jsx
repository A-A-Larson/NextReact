"use client";
import React, { useState, useEffect } from 'react';
import HeroImg from '../img/HeaderEdit4Resize.png';
import Image from 'next/image';

export default function Landing() {
    return (
        <section className='flex flex-col border'>
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
                    grid                  
                    content-center                    
                    grow                                       
                    '
            >       
                <h1 
                    className='
                        text-left
                        text-base
                        sm:text-xl                        
                        m-auto
                        ' 
                >                    
                    Hi, I'm 
                <br/>  

                    <span
                        className='
                            font-mono  
                            text-5xl
                            sm:text-6xl 
                            font-bold
                            tracking-tighter
                            leading-snug
                            '
                    >
                        Andrew Larson
                    </span>
                </h1>                             
            </header>             
        </section>
    )
}