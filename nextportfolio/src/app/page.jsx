'use client';
import { useEffect } from 'react';
import NavHeader from './components/NavHeader';
import HeroImg from './img/BackgroundLayer1.png';
import BodyImg from './img/BodyLayer1.png';
import HandsLight from './img/HandsLayer1.png';
import HandsDark from './img/HandsLayer1.png';
import AboutImg from './img/aboutMe.jpg';
import Image from 'next/image';
import FooterImg from './img/footerImg.png';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";



export default function Home() {

  useEffect(() => {
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const reactAnim = entry.target.querySelector('#react');
        const sqlAnim = entry.target.querySelector('#sql');
        const nextAnim = entry.target.querySelector('#next');
        const tailwindAnim = entry.target.querySelector('#tailwind');
        const javaAnim = entry.target.querySelector('#java');
        const phpAnim = entry.target.querySelector('#php');
        const javascriptAnim = entry.target.querySelector('#javascript');
        const cssAnim = entry.target.querySelector('#css');
        const htmlAnim = entry.target.querySelector('#html');
        const techHeadAnim = entry.target.querySelector('.techHead');
        
    
        if (entry.isIntersecting) {
          reactAnim.classList.add('react-grid-animation');
          sqlAnim.classList.add('sql-grid-animation');
          nextAnim.classList.add('next-grid-animation');
          tailwindAnim.classList.add('tailwind-grid-animation');
          javaAnim.classList.add('java-grid-animation');
          phpAnim.classList.add('php-grid-animation');
          javascriptAnim.classList.add('javascript-grid-animation');
          cssAnim.classList.add('css-grid-animation');
          htmlAnim.classList.add('html-grid-animation');
          techHeadAnim.classList.add('techHead-grid-animation');
          
        return; // if we added the class, exit the function
        }
    
        // We're not intersecting, so remove the class!
        reactAnim.classList.remove('react-grid-animation');
        sqlAnim.classList.remove('sql-grid-animation');
        nextAnim.classList.remove('next-grid-animation');
        tailwindAnim.classList.remove('tailwind-grid-animation');
        javaAnim.classList.remove('java-grid-animation');
        phpAnim.classList.remove('php-grid-animation');
        javascriptAnim.classList.remove('javascript-grid-animation');
        cssAnim.classList.remove('css-grid-animation');
        htmlAnim.classList.remove('html-grid-animation');
        techHeadAnim.classList.remove('techHead-grid-animation');
      });
    }, { threshold: 0.1 });
    
    observer.observe(document.querySelector('.techSection'));


    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const aboutImgAnim = entry.target.querySelector('.aboutImg');
        const aboutParaAnim = entry.target.querySelector('.aboutPara');
        
    
        if (entry.isIntersecting) {
          aboutImgAnim.classList.add('aboutImg-grid-animation');
          aboutParaAnim.classList.add('aboutPara-grid-animation');

        return; // if we added the class, exit the function
        }
    
        // We're not intersecting, so remove the class!
        aboutImgAnim.classList.remove('aboutImg-grid-animation');
        aboutParaAnim.classList.remove('aboutPara-grid-animation');
      });
    }, { threshold: 0.1 });
    
    observer2.observe(document.querySelector('.aboutSection'));
    
  }, 
  
  [])

  return (
    <main 
      className="
        mainGrid
        bg-lightBG 
        text-lightTxtClr
        dark:bg-darkBG 
        dark:text-darkTxtClr"
    >             

      <section className='landingSection'>
        <div className='parallax'>
          <Image
            className='backgroundLayer'                
            width={3024}
            height={2016}
            src={HeroImg}   
            quality={100}
            priority={true}
            alt='Man with hands overlapping the top of the webpage as if he is holding onto it'
          />    
          <Image
            className='bodyLayer'                
            width={3024}
            height={2016}
            src={BodyImg}   
            quality={100}
            priority={true}
            alt='Man with hands overlapping the top of the webpage as if he is holding onto it'
          />           
          <Image  
            className='hidden dark:block'             
            src={HandsDark}
            alt='Floating hands'
            width={3024}
            height={3024}                        
          />
          <Image       
            className='block dark:hidden'        
            src={HandsLight}
            alt='Floating hands'
            width={3024}
            height={3024}                        
          />        
        </div>
        
        <header 
          className='
            headerLayer
            bg-lightBG
            dark:bg-darkBG
            text-lightHdrClr 
            dark:text-darkHdrClr  
            flex
            flex-col  
            justify-center
            items-center                        
            '
        >       
          <h1 
            className='
              text-base
              sm:text-xl
              flex
              flex-col
              justify-center
              items-center
              
              ' 
          > 
            <div
              className='                            
                mr-auto
                '    
            >                 
                Hi, I&apos;m 
            </div>  
            <br/>  
            <div
              className='                              
                text-4xl
                xs:text-5xl
                sm:text-6xl 
                font-black
                tracking-tighter
                leading-snug
                text-center
                '
            >
              Andrew Larson
            </div>
          </h1>   
                                    
        </header>             
      </section> 

      <NavHeader />

      <section
        className='
          aboutSection
          bg-lightBG
          dark:bg-darkBG
          z-10
          p-8
          '
      >
        <div className='aboutImg max-w-md flex-1'>
          <Image
            className='
              rounded-full
              shadow-2xl
              shadow-gray-900                     
              '                
            width={718}
            height={718}
            src={AboutImg}   
            quality={100}
            alt='Man staring out a window on a train'
          />
        </div>
        <div className='aboutPara pt-12 text-lg md:pt-0 max-w-xl flex-1'>
          <p className=''>
              I have 18 years of experience troubleshooting everything from cars to xrays. Now I&apos;m making a career change to Web Developement so I can continue to learn and problem solve as I get too old to turn wrenches. 
          </p>
        </div>
      </section>

      <section className='
                techSection
                bg-lightBG
                dark:bg-darkBG
                z-10
                '>        
        <div className='techObserve'>
          <h1 className='
                  techHead                              
                  text-4xl
                  xs:text-5xl
                  md:text-6xl 
                  font-black
                  tracking-tighter
                  leading-snug
                  text-center
                  text-lightHdrClr 
                  dark:text-darkHdrClr
                  '>
            Tech Stack:
          </h1>

          <div className='
                techGrid
                '>
            
            <div id='html' className='skillCard '>
              <div className='skillLogo'>
                <FaHtml5 color='red' /> 
              </div>    
              <div className='skillName'>
                HTML
              </div>
            </div>

            <div id='css' className='skillCard'>
              <div className='skillLogo'>
                <FaCss3Alt color='blue' />
              </div>
              <div className='skillName'>
                CSS
              </div>    
            </div>

            <div id='javascript' className='skillCard'>
              <div className='skillLogo'>
                <SiJavascript color='yellow' /> 
              </div>
              <div className='skillName'>
                Javascript
              </div>    
            </div>

            <div id='java' className='skillCard'>
              <div className='skillLogo'>
                <FaJava color='darkblue' />
              </div>
              <div className='skillName'>
                Java    
              </div>                         
            </div>

            <div id='react' className='skillCard .grid-animation'>
              <div className='skillLogo'>
                <FaReact color='aqua' />
              </div>
              <div className='skillName'>
                React        
              </div>
            </div>

            <div id='next' className='skillCard'>
              <div className='skillLogo'>
                <SiNextdotjs color='black' />
              </div>
              <div className='skillName'>
                Next.js    
              </div>    
            </div>

            <div id='php' className='skillCard'>
              <div className='skillLogo'>
              <SiPhp /> 
              </div>
              <div className='skillName'>
                PHP    
              </div>    
            </div>

            <div id='tailwind' className='skillCard'>
              <div className='skillLogo'>
                <SiTailwindcss color='teal' />
              </div>
              <div className='skillName'>
                Tailwind    
              </div>
            </div> 

            <div id='sql' className='skillCard'>
              <div className='skillLogo'>
              <BsFiletypeSql />
              </div>
              <div className='skillName'>
                SQL    
              </div>
            </div> 

          </div>  
        </div>                                        
      </section>

      <section className='footerSection bg-white z-30 flex flex-col justify-end items-center'>
        <footer className=''>
            
          <div className='max-w-screen-md relative bottom-0'>
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
              className=''                
              width={3024}
              height={620}
              src={FooterImg}   
              quality={100}
              alt='Feet sticking out from the bottom of the webpage.'
            />
          </div>
        </footer>
      </section>
    </main>
  )
};