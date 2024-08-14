'use client';
import Image from 'next/image';
import FooterImg from '../img/footerLayer1.png';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import FooterBG from '../img/footerBG.png'


export default function Footer() {
    return (
        <footer className='footerLayer'>   
        <Image
            className='footer-bg'    
            src={FooterBG}   
            quality={100}
            priority={true}
            fill
            alt='Cement pavement with the name Andrew Larson written in chalk'
          />          
          <div className='footer-icon-wrapper'>
          
            <div className='absolute flex justify-center items-center h-full w-full'>
              <div className='footer-icon'>
                <FaLinkedin size={35} />
              </div>
              <div className='footer-icon'>
                <FaGithub size={35} />
              </div>
              <div className='footer-icon'>
                <IoIosMail size={35} />
              </div>
            </div>
            <Image
              className='footerImg'                
              width={3024}
              height={620}
              src={FooterImg}   
              quality={100}
              alt='Feet sticking out from the bottom of the webpage.'
            />
          </div>
        </footer>        
    )
}