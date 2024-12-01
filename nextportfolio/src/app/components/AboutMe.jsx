import { aboutRef, aboutIsVisible } from "../hooks/useRefs.jsx";
import Image from 'next/image';
import About from '../img/aboutbust1.png';
import { useInView } from "react-intersection-observer";

export default function AboutMe() {
    
    const { ref: aboutRef, inView: aboutIsVisible } = useInView({"triggerOnce": true});
    return (
        <div
            ref={aboutRef}
            className='aboutLayout 
                      text-lightHdrClr 
                      dark:text-darkHdrClr'>

            <h1 className={`${'aboutH1'} ${aboutIsVisible && 'aboutH1-animation'}`}>About Me</h1>

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
    )
}