'use client';
import Image from 'next/image';
import FooterImg from '../img/footerImg.png';

export default function Footer() {
    return (
        <div className='max-w-screen-lg m-auto'>
                <Image
                    className=''                
                    width={3024}
                    height={620}
                    src={FooterImg}   
                    quality={100}
                    alt='Feet sticking out from the bottom of the webpage.'
                />
        </div>
    )
}