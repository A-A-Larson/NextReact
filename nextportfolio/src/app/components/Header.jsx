"use client";
import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { Button } from '@mui/base/Button';
import ThemeSwitch from './ThemeSwitch';


export default function Header() {

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const scrollAction = () => {
        if (showTopBtn) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        } else {
            
        }        
    };

    

    return (
        <div 
        className='
            relative 
            z-10 
            bg-inherit 
            text-nowrap
            w-full
            flex
            justify-center'
        >       

            <div 
                className='
                    text-headercolor-light 
                    dark:text-headercolor-dark
                    '
            >
                <ThemeSwitch />
                <h1 
                    className='
                        text-left
                        text-base
                        md:text-2xl
                        lg:text-3xl'                    
                    id='first-section' 
                >                    
                    Hi, I'm 
                </h1>    

                <h2
                    className='
                        font-mono  
                        text-4xl 
                        md:text-6xl
                        lg:text-8xl
                        font-bold'
                >
                    Andrew Larson
                </h2> 
                <div
                className='
                    flex
                    justify-center
                    pt-2'
                >
                    <Button 
                    href='#first-section'
                    onClick={scrollAction}
                    className='
                        bg-buttonBgLight
                        dark:bg-buttonBgDark
                        text-background-light
                        dark:text-background-dark
                        rounded-md
                        py-1 
                        px-4'
                    >
                        Look What I Can Do
                    </Button>    
                </div>           
            </div>      
            <div 
                className='h-screen'               
            >

            </div>
            

        </div>
    )
};