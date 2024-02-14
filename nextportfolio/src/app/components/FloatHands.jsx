"use client";
import HandsLight from '../img/HandsResizeLight.png';
import HandsDark from '../img/HandsResizeDark1.png';
import Image from 'next/image';

export default function FloatHands() {
    
    return (
                                
            <div 
            className='static z-20'
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