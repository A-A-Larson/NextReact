"use client";
import Hands from '../img/HandsResize2.png';
import Image from 'next/image';

export default function FloatHands() {
    
    return (
                                
            <div>
                <div className='relative z-20'>
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