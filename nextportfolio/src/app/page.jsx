'use client';
import { useInView } from "react-intersection-observer";
import NavHeader from './components/NavHeader';
import ApiDemo from "./components/ApiDemo";
import BGImg from './img/BGImg4.jpg';
import BGImgDark from './img/BGImg22.jpg';
import BodyImg from './img/BlueshirtV2HSave.png';
import HandsLight from './img/HandsUWlbg.png';
import HandsDark from './img/HandsUWdbg.png';
import LHand from './img/LHand.png';
import RHand from './img/RHand.png';
import Image from 'next/image';
import About from './img/aboutbust1.png'
import constructionTapeImg from './img/construction.png'
import constructionFrameImg from './img/constructionFrame.png'
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
import Footer from './components/Footer';



export default function Home() {
  const { ref: techRef, inView: techIsVisible } = useInView({});
  const { ref: aboutRef, inView: aboutIsVisible } = useInView({});
  const { ref: projectRef, inView: projectIsVisible } = useInView({});
    
  return (
    <div>
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
              className='backgroundLayer block dark:hidden'
              src={BGImg}  
              priority={true}
              alt='Cloudy sky during the day'
            /> 
            <Image  
              className='backgroundLayer hidden dark:block'             
              src={BGImgDark}
              priority={true} 
              alt='Night sky'                  
            />  
            <Image
              className='bodyLayer'                
              width={3024}
              height={1500}
              src={BodyImg}   
              quality={100}
              priority={true}
              alt='Man with hands overlapping the top of the webpage as if he is holding onto it'
            />    
            <Image       
              className='handsbg block dark:hidden'        
              src={HandsLight}
              alt='Floating hands'
              width={6880}
              height={1440}   
              priority={true}                     
            />    
            <Image  
              className='handsbg hidden dark:block'             
              src={HandsDark}
              alt='Floating hands'
              width={6880}
              height={1440}     
              priority={true}                   
            />    

            <div className="handsLayers">                
              <Image       
                className='hand LHand'        
                src={LHand}
                alt='Floating hand'
                width={575}
                height={1440}   
                priority={true}                     
              />      
              <Image       
                className='hand RHand'        
                src={RHand}
                alt='Floating hand'
                width={592}
                height={1440}   
                priority={true}                     
              />    
            </div>
              
          </div>
          
          <header 
            className='
              headerLayer
              bg-lightBG
              dark:bg-darkBG
              text-lightHdrClr 
              dark:text-darkHdrClr                 
              '
          >       

            <h1 className='headerH1'> 

              <div className='headerIntro'>                 
                Hi, I&apos;m 
              </div>  

              <div className='headerName'>
                Andrew Larson
              </div>
              <div className="main__action">
                <a className="main__scroll" href="#Scroll-Location">              
                  <div className="main__scroll-box">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path className="fill-lightHdrClr dark:fill-darkHdrClr" 
                            d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z">
                      </path>
                    </svg>
                  </div>    
                  <span className="main__scroll-text headerIntro">Learn More</span>
                </a>
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
          id="Scroll-Location"
        >
          
          <div
            ref={aboutRef}
            className='aboutLayout 
                      text-lightHdrClr 
                      dark:text-darkHdrClr'>

            <h1 className={`${'aboutH1'} ${aboutIsVisible ? 'aboutH1-animation' : ''}`}>About Me</h1>

            <div className={`${'about1'} ${aboutIsVisible ? 'about1-animation' : ''}`}>
              <h2 className="aboutH2">What am I doing now?</h2>
              <p className='aboutP1'>
              I am finishing a degree in full stack web development with a certificate in computer programming and another in web and mobile app development while doing an internship at a data analytics firm.
              </p>
            </div>

            <div className={`${'about2'} ${aboutIsVisible ? 'about2-animation' : ''}`}>
              <h2 className="aboutH2">How did I get here?</h2>
              <p className='aboutP2'>
              In 2007 I started a career as a mechanic with a degree in automotive technology. Since then I've been a self starter, working independently in a commision shop with tight deadlines. A mechanical team lead on a production line that used Six Sigma methodology and Lean production with weekly sprints. I've achieved the title of Master Automotive Techician and run out of new things to learn. <br /><br />As a lifelong learner, I'm starting a new chapter in my life as I trade in my wrenches for a keyboard.
              </p>
            </div>

            <div className={`${'about3'} ${aboutIsVisible ? 'about3-animation' : ''}`}>
              <h2 className="aboutH2">Where do I want to go from here?</h2>
              <p className='aboutP3'>
              As I approach graduation I will continue working on projects, building my portfolio and looking for opportunities to gain real world experience. Use the email button in the navigation bar or footer to connect!
              </p>
            </div>

            <Image
              className='aboutImg'
              src={About}  
              width={663}
              height={695}
              alt='A profile picture of Andrew Larson'
            />

          </div>          

        </section>

        <section
          className='
            projectSection
            bg-lightBG
            dark:bg-darkBG
            '
        >
          
          <div
              ref={projectRef}
              className='projectDiv 
                        text-lightHdrClr 
                        dark:text-darkHdrClr'>
            <h1 className={`${'projectH1'} ${projectIsVisible ? 'projectH-animation' : ''}`}>This Project</h1> <br/>
            <h2 className={`${'projectH2-1'} ${projectIsVisible ? 'projectH-animation' : ''}`}>Goals</h2>
            
            <ul className="goalsul"><br />
              <li className={`${'goalsli1'} ${projectIsVisible ? 'goalsli1-animation' : ''}`}>Build a modular portfolio I can add to over time</li><br />
              <li className={`${'goalsli2'} ${projectIsVisible ? 'goalsli2-animation' : ''}`}>Get more experience using Next.js, Tailwind CSS, and React</li><br />
              <li className={`${'goalsli3'} ${projectIsVisible ? 'goalsli3-animation' : ''}`}>Practiced what I've learned of responsive web design and accessibility</li>
            </ul>
            <br />
            <h2 className={`${'projectH2-2'} ${projectIsVisible ? 'projectH-animation' : ''}`}>Opportunities</h2>
            <br />
            <ul className="oppul">
              <li className={`${'oppli1'} ${projectIsVisible ? 'oppli1-animation' : ''}`}>Learned about animations, content creation and even photography</li><br />
              <li className={`${'oppli2'} ${projectIsVisible ? 'oppli2-animation' : ''}`}>Learned about polyfills and scripts to get the animations to work on more browsers</li>
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

              <a id='python' className='cardWrapper' href="https://github.com/search?q=user%3AA-A-Larson+topic%3Apython&type=repositories">
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
        <section className="
                  APIDemoSection 
                  bg-lightBG
                  dark:bg-darkBG">
                    <ApiDemo/>
        </section>
      </main>
      <Footer /> 
    </div>
  )
};