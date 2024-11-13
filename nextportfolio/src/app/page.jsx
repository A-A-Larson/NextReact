'use client';
import { useInView } from "react-intersection-observer";
import NavHeader from './components/NavHeader';
import BGImg from './img/BGImg4.jpg';
import BGImgDark from './img/BGImg11.jpg';
import BodyImg from './img/BlueshirtV2HSave.png';
import HandsLight from './img/HandsUWv2.png';
import HandsDark from './img/HandsUWDarkv2.png';
import Image from 'next/image';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { BsExclamation } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
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
            priority={true}
            alt='Cloudy sky during the day'
          /> 
          <Image  
            className='backgroundLayer hidden dark:block'             
            src={BGImgDark}
            alt='Night sky'
            priority={true}                   
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
                        text-lightHdrClr 
                        dark:text-darkHdrClr'>
          <h1 className="aboutH1">About Me</h1> <br/>
          <p className=''>
          I have 18 years of experience diagnosing and repairing everything from cars to xrays. I made a career change to software development to continue to learn and problem solve new things.
          <br/><br/>
          My Computer Science degree and certificates are focused on full stack web/mobile app development and computer programming. Front end, UI design and graphic design are areas that I have enjoyed the most so far. Most of my recent projects were made with React or Python.  

          </p>
        </div>
      </section>

      <section
        className='
          projectSection
          bg-lightBG
          dark:bg-darkBG
          '
      >
        
        <div className='aboutPara 
                        text-lightHdrClr 
                        dark:text-darkHdrClr'>
          <h1 className="aboutH1">This Project</h1> <br/>
          <h1 className="projectH1">Goals</h1>
          <br />
          <ul>
            <li className="oppli">Build a portfolio <GiCheckMark className="goalsSVG" color="green" /></li>
            <li className="oppli">Get more experience using Next.js, Tailwind CSS, and React <GiCheckMark className="goalsSVG" color="green" /></li>
            <li className="oppli">Practiced what I've learned of responsive web design and accessibility <GiCheckMark className="goalsSVG" color="green" /></li>
          </ul>
          <br />
          <h1 className="projectH1">Opportunities</h1>
          <br />
          <ul>
            <li className="oppli"> <BsExclamation className="oppSVG" color="yellow" /> Learned about animations, content creation and even photography</li>
            <li className="oppli"> <BsExclamation className="oppSVG" color="yellow" /> Learned about polyfills and scripts to get the animations to work on more browsers</li>
          </ul>
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

          <div className='techGrid'>           

            <a id='react' className='cardWrapper' href="https://github.com/search?q=user%3AA-A-Larson+topic%3Areact&type=repositories">
              <div className={`${'skillCard'} ${techIsVisible ? 'column3-grid-animation' : ''}`}>
                <div className='skillLogo'>
                  <FaReact color='aqua' />
                </div>
                <div className='skillName'>
                  React        
                </div>
              </div>
            </a>       

            <a id='python' className='cardWrapper' href="https://github.com/search?q=user%3AA-A-Larson+topic%3Areact&type=repositories">
              <div className={`${'skillCard'} ${techIsVisible ? 'column5-grid-animation' : ''}`}>
                <div className='skillLogo'>
                  <FaPython color="#0172b6" />
                </div>
                <div className='skillName'>
                  Python        
                </div>
              </div>
            </a>     

            <a id='sql' className='cardWrapper' href="https://github.com/search?q=user%3AA-A-Larson+topic%3Asql&type=repositories">
              <div className={`${'skillCard'} ${techIsVisible ? 'column4-grid-animation' : ''}`}>
                <div className='skillLogo'>
                <BsFiletypeSql />
                </div>
                <div className='skillName'>
                  SQL    
                </div>
              </div> 
            </a>

            <a id='next' className='cardWrapper' href="https://github.com/search?q=user%3AA-A-Larson+topic%3Anextjs&type=repositories">
              <div className={`${'skillCard'} ${techIsVisible ? 'column3-grid-animation' : ''}`}>
                <div className='skillLogo'>
                  <SiNextdotjs color='black' />
                </div>
                <div className='skillName'>
                  Next.js    
                </div>    
              </div>
            </a>

            <a id='tailwind' className='cardWrapper' href="https://github.com/search?q=user%3AA-A-Larson+topic%3Atailwind&type=repositories">
              <div className={`${'skillCard'} ${techIsVisible ? 'column2-grid-animation' : ''}`}>
                <div className='skillLogo'>
                  <SiTailwindcss color='teal' />
                </div>
                <div className='skillName'>
                  Tailwind    
                </div>
              </div> 
            </a>

            <a id='java' className='cardWrapper' href="https://github.com/search?q=user%3AA-A-Larson+topic%3Ajava&type=repositories">
              <div className={`${'skillCard'} ${techIsVisible ? 'column5-grid-animation' : ''}`}>
                <div className='skillLogo'>
                  <FaJava color='darkblue' />
                </div>
                <div className='skillName'>
                  Java    
                </div>                         
              </div>
            </a>

            <a id='php' className='cardWrapper' href="https://github.com/search?q=user%3AA-A-Larson+topic%3Aphp&type=repositories">
              <div  className={`${'skillCard'} ${techIsVisible ? 'column4-grid-animation' : ''}`}>
                <div className='skillLogo'>
                <SiPhp /> 
                </div>
                <div className='skillName'>
                  PHP    
                </div>    
              </div>
            </a>

            <a id='javascript' className='cardWrapper' href="https://github.com/search?q=user%3AA-A-Larson+topic%3Ajavascript&type=repositories">
              <div className={`${'skillCard'} ${techIsVisible ? 'column3-grid-animation' : ''}`}>
                <div className='skillLogo'>
                  <SiJavascript color='yellow' /> 
                </div>
                <div className='skillName'>
                  Javascript
                </div>    
              </div>
            </a>

            <a id='css' className='cardWrapper' href="https://github.com/search?q=user%3AA-A-Larson+topic%3Acss&type=repositories">
              <div className={`${'skillCard'} ${techIsVisible ? 'column2-grid-animation' : ''}`}>
                <div className='skillLogo'>
                  <FaCss3Alt color='blue' />
                </div>
                <div className='skillName'>
                  CSS
                </div>    
              </div>
            </a>
            
            <a id='html' className='cardWrapper' href="https://github.com/search?q=user%3AA-A-Larson+topic%3Ahtml&type=repositories">
              <div className={`${'skillCard'} ${techIsVisible ? 'column1-grid-animation' : ''}`}>
                <div className='skillLogo'>
                  <FaHtml5 color='red' /> 
                </div>    
                <div className='skillName'>
                  HTML
                </div>
              </div>
            </a>

          </div>  
        </div>                                        
      </section>            
      <Footer /> 
    </main>
  )
};