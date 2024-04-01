import NavButton from './components/NavButton';
import HeroImg from './img/HeaderEdit4Resize.png';
import AboutImg from './img/aboutMe.jpg';
import Image from 'next/image';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Home() {
  return (
    <main 
      className="
        bg-lightBG 
        text-lightTxtClr
        dark:bg-darkBG 
        dark:text-darkTxtClr"
    >     
      <NavButton />       
      <section className='flex flex-col border-b'>
        <div className='max-w-screen-lg m-auto'>
          <Image
            className=''                
            width={2930}
            height={924}
            src={HeroImg}   
            quality={100}
            priority={true}
            alt='Man with hands overlapping the top of the webpage as if he is holding onto it'
          />            
        </div>
        <header 
          className='
            text-lightHdrClr 
            dark:text-darkHdrClr  
            flex
            flex-col                   
            grow    
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
                Hi, I'm 
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
      <section
        className='
          flex 
          flex-col
          md:flex-row
          justify-around
          items-center
          border-b
          p-8
          '
      >
        <div className='max-w-md flex-1'>
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
        <div className='pt-12 text-lg md:pt-0 md:pl-12 xl:pl-0 max-w-xl flex-1'>
          <p className=''>
              I have 18 years of experience troubleshooting everything from cars to xrays. Now I'm making a career change to Web Developement so I can continue to learn and problem solve as I get too old to turn wrenches. 
          </p>
        </div>
      </section>

      <section className='techLayout'>        
        <div className='techGrid'>
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

          <div id='react' className='skillCard'>
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

          <div id='npm' className='skillCard'>
            <div className='skillLogo'>
              <FaNpm color='red' /> 
            </div>
            <div className='skillName'>
              NPM    
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
        </div>                                          
      </section>
    </main>
  )
};