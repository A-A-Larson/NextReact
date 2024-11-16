'use client';
import Image from 'next/image';
import FooterImgL from '../img/footlayer7.png';
import FooterImgD from '../img/footlayer7v2.png';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import FooterBGL from '../img/footbg15.png';
import FooterBGD from '../img/footbg14.png';


export default function Footer() {
    return (
        <footer className='footerSection'>   
          <div className='footerParallax'>

            <Image
              className='footer-bg block dark:hidden'    
              src={FooterBGL}   
              quality={100}
              priority={true}
              alt='Cement pavement with the name Andrew Larson written in chalk'
            />   

            <Image
              className='footer-bg hidden dark:block'    
              src={FooterBGD}   
              quality={100}
              priority={true}
              alt='Cement pavement with the name Andrew Larson written in chalk'
            />      

            <div className='footer-icon-wrapper'>      
              <div className='footer-icon dark:text-darkIcon'>
                <FaLinkedin size={40} />LinkedIn
              </div>
              <div className='footer-icon dark:text-darkIcon'>
                <FaGithub size={40} />GitHub
              </div>
              <div className='footer-icon dark:text-darkIcon'>
                <IoIosMail size={40} />Email
              </div>                          
            </div>

            <Image
              className='footerImg block dark:hidden'     
              src={FooterImgL}   
              quality={100}
              alt='Feet sticking out from the bottom of the webpage.'
            />

            <Image
              className='footerImg hidden dark:block'    
              src={FooterImgD}   
              quality={100}
              alt='Feet sticking out from the bottom of the webpage.'
            /> 

          </div>
        </footer>        
    )
}