"use client";
import React from 'react';
import ThemeToggle from './ThemeToggle'
import { Button as BaseButton } from '@mui/base/Button';


export default function Header() {
    return (
        <div 
        className='relative 
                   z-10 
                   bg-inherit 
                   text-nowrap
                   w-full
                   flex
                   justify-center'
        >       

            <div 
                className='text-headercolor-light 
                           dark:text-headercolor-dark
                           '
            >
                <ThemeToggle />
                <h1 
                    className='text-left
                               text-base
                               md:text-2xl
                               lg:text-3xl'
                >                    
                    Hi, I'm 
                </h1>    

                <h2
                    className='font-mono  
                               text-4xl 
                               md:text-6xl
                               lg:text-8xl
                               font-bold'
                >
                    Andrew Larson
                </h2> 
                <div
                className='flex
                          justify-center'
                >
                    <BaseButton
                    href='#first-section'
                    className='bg-buttonBgLight
                               dark:bg-buttonBgDark
                               text-background-light
                               dark:text-background-dark'
                    >
                        Look What I Can Do
                    </BaseButton>    
                </div>           
            </div>      
            <div 
                className='h-screen'
                id='first-section'
            >

            </div>

        </div>
    )
};