"use client";
import HandsLight from '../img/HandsResizeLight.png';
import HandsDark from '../img/HandsResizeDark.png';
import Image from 'next/image';

export default function FloatHands() {
    
    return (
                                
            <div 
            className='relative z-20 max-w-screen-xl'
            id='landing-section'
            >
                <Image  
                    className='hidden dark:block'             
                    src={HandsDark}
                    alt='Floating hands'
                    width={2930}
                    height={924}                        
                />
                <Image       
                    className='block dark:hidden'        
                    src={HandsLight}
                    alt='Floating hands'
                    width={2930}
                    height={924}                        
                />                     
            </div>
    )
};