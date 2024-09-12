'use client';
import { useInView } from "react-intersection-observer";
import NavHeader from './components/NavHeader';
import BGImg from './img/BGImg5.jpg';
import BodyImg from './img/BlueshirtV2HSave.png';
import HandsLight from './img/HandsUWv2.png';
import HandsDark from './img/HandsUWDarkv2.png';
import Image from 'next/image';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import Footer from './components/Footer';



export default function Home() {
  const { ref: techRef, inView: techIsVisible } = useInView({});
    
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
            src={BGImg}   
            fill
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
            className='hands block dark:hidden'        
            src={HandsLight}
            alt='Floating hands'
            width={3024}
            height={1500}   
            priority={true}                     
          />      
          <Image  
            className='hands hidden dark:block'             
            src={HandsDark}
            alt='Floating hands'
            width={3024}
            height={1500}     
            priority={true}                   
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
                headerName 
                xs:text-5xl
                sm:text-6xl 
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
          '
      >
        
        <div className='aboutPara 
                        pt-12 
                        text-lg 
                        md:pt-0 
                        max-w-xl 
                        flex-1
                        text-lightHdrClr 
                        dark:text-darkHdrClr'>
          <h1 className="aboutH1">About Me</h1> <br/>
          <p className=''>
          I have 18 years of experience troubleshooting everything from cars to xrays. I made a career change to software development to continue to learn and problem solve new things. 
          <br/><br/>
          My education covered full stack development so I am open to all roles, but I have enjoyed front end, UI design and graphic design the most so far. Most of my recent projects were made with React or Python. 

          </p>
        </div>
      </section>

      <section  className='
                techSection
                bg-lightBG
                dark:bg-darkBG
                '>        
        <div ref={techRef} className='techObserve'>
          <h1 className={`${'techHead'} 
                          ${'text-4xl'}
                          ${'xs:text-5xl'}
                          ${'md:text-6xl'}
                          ${'font-black'}
                          ${'tracking-tighter'}
                          ${'leading-snug'}
                          ${'text-center'}
                          ${'text-lightHdrClr'}
                          ${'dark:text-darkHdrClr'}
                          ${techIsVisible ? 'techHead-grid-animation' : ''}
                        `}>
            Tech Stack:
          </h1>

          <div className='
                techGrid
                '>
            <div id='html' className='cardWrapper'>
              <div className={`${'skillCard'} ${techIsVisible ? 'column1-grid-animation' : ''}`}>
                <div className='skillLogo'>
                  <FaHtml5 color='red' /> 
                </div>    
                <div className='skillName'>
                  HTML
                </div>
              </div>
            </div>

            <div id='css' className='cardWrapper'>
              <div className={`${'skillCard'} ${techIsVisible ? 'column2-grid-animation' : ''}`}>
                <div className='skillLogo'>
                  <FaCss3Alt color='blue' />
                </div>
                <div className='skillName'>
                  CSS
                </div>    
              </div>
            </div>

            <div id='javascript' className='cardWrapper'>
              <div className={`${'skillCard'} ${techIsVisible ? 'column3-grid-animation' : ''}`}>
                <div className='skillLogo'>
                  <SiJavascript color='yellow' /> 
                </div>
                <div className='skillName'>
                  Javascript
                </div>    
              </div>
            </div>

            <div id='java' className='cardWrapper'>
              <div className={`${'skillCard'} ${techIsVisible ? 'column5-grid-animation' : ''}`}>
                <div className='skillLogo'>
                  <FaJava color='darkblue' />
                </div>
                <div className='skillName'>
                  Java    
                </div>                         
              </div>
            </div>

            <div id='react' className='cardWrapper'>
              <div className={`${'skillCard'} ${techIsVisible ? 'column3-grid-animation' : ''}`}>
                <div className='skillLogo'>
                  <FaReact color='aqua' />
                </div>
                <div className='skillName'>
                  React        
                </div>
              </div>
            </div>

            <div id='next' className='cardWrapper'>
              <div className={`${'skillCard'} ${techIsVisible ? 'column3-grid-animation' : ''}`}>
                <div className='skillLogo'>
                  <SiNextdotjs color='black' />
                </div>
                <div className='skillName'>
                  Next.js    
                </div>    
              </div>
            </div>

            <div id='php' className='cardWrapper'>
              <div  className={`${'skillCard'} ${techIsVisible ? 'column4-grid-animation' : ''}`}>
                <div className='skillLogo'>
                <SiPhp /> 
                </div>
                <div className='skillName'>
                  PHP    
                </div>    
              </div>
            </div>

            <div id='tailwind' className='cardWrapper'>
              <div className={`${'skillCard'} ${techIsVisible ? 'column2-grid-animation' : ''}`}>
                <div className='skillLogo'>
                  <SiTailwindcss color='teal' />
                </div>
                <div className='skillName'>
                  Tailwind    
                </div>
              </div> 
            </div>

            <div id='sql' className='cardWrapper'>
              <div className={`${'skillCard'} ${techIsVisible ? 'column4-grid-animation' : ''}`}>
                <div className='skillLogo'>
                <BsFiletypeSql />
                </div>
                <div className='skillName'>
                  SQL    
                </div>
              </div> 
            </div>

          </div>  
        </div>                                        
      </section>            
      <Footer /> 
    </main>
  )
};