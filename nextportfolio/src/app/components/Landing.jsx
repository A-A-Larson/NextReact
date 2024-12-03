import BGImg from '../img/BGImg4.jpg';
import BGImgDark from '../img/BGImg22.jpg';
import BodyImg from '../img/BlueshirtV2HSave.png';
import HandsLight from '../img/HandsUWlbg.png';
import HandsDark from '../img/HandsUWdbg.png';
import LHand from '../img/LHand.png';
import RHand from '../img/RHand.png';
import Image from 'next/image';

export default function Landing() {
    return (
        <>
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
                alt='Night sky'                  
                />  
                <Image
                className='bodyLayer'                
                width={3024}
                height={1500}
                src={BodyImg}   
                priority={true}  
                alt='Man with hands overlapping the top of the webpage as if he is holding onto it'
                />    
                <Image       
                className='handsbg block dark:hidden'        
                src={HandsLight}
                priority={true} 
                alt='Floating hands'
                width={6880}
                height={1440}                    
                />    
                <Image  
                className='handsbg hidden dark:block'             
                src={HandsDark}
                alt='Floating hands'
                width={6880}
                height={1440}                     
                />    

                <div className="handsLayers">                
                <Image       
                    className='hand LHand'        
                    src={LHand}
                    alt='Floating hand'
                    width={575}
                    height={1440}                     
                />      
                <Image       
                    className='hand RHand'        
                    src={RHand}
                    alt='Floating hand'
                    width={592}
                    height={1440}                      
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
                <a className="main__scroll" href="#Scroll-Location" aria-label="Call to action that scrolls to the about me section of the page." aria-hidden="true">              
                  <div className="main__scroll-box">
                    <svg className="main__scroll-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path className="fill-lightHdrClr dark:fill-darkHdrClr" 
                            d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z">
                      </path>
                    </svg>
                  </div>    
                  
                </a>
              </div>  
            </h1>   
          </header> 
        </>
    )
}