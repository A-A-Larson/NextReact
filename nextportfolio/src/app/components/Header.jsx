"use client";
import React, { useState, useEffect } from 'react';
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
                    text-lightHdrClr 
                    dark:text-darkHdrClr
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
                        font-bold
                        tracking-tighter
                        leading-snug'
                >
                    Andrew Larson
                </h2> 
                <div
                className='
                    flex
                    justify-center
                    pt-10'
                >
                    <Button 
                        href='#first-section'
                        onClick={scrollAction}
                        className='
                            scrollbutton
                            dark:dkbutton
                            bg-buttonBgLight
                            dark:bg-buttonBgDark
                            text-lightHdrClr
                            dark:text-darkBG
                            '
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