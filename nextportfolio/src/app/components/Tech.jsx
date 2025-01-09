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
import { useInView } from "react-intersection-observer";

export default function Tech() {
    
    const { ref: techRef, inView: techIsVisible } = useInView({"triggerOnce": true});

    return (
        <div ref={techRef} className='techObserve'>
          <div>
            <h1 className={`${'techHead'} 
                            ${'text-lightHdrClr'}
                            ${'dark:text-darkHdrClr'}
                            ${techIsVisible ? 'techHead-grid-animation' : ''}
                          `}>
              Tech Stack:              
            </h1>
            </div>
            <div className='techGrid text-lightHdrClr dark:text-darkHdrClr'>           

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
              <div id="clickText" className="clickText">(Click One)</div>
              
            </div>  
          </div>    
    )
}