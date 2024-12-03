import { useInView } from "react-intersection-observer";

export default function Project() {
    
  const { ref: projectRef, inView: projectIsVisible } = useInView({"triggerOnce": true});

    return (
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
              <li className={`${'goalsli3'} ${projectIsVisible ? 'goalsli3-animation' : ''}`}>Practiced what I&apos;ve learned of responsive web design and accessibility</li>
            </ul>
            <br />
            <h2 className={`${'projectH2-2'} ${projectIsVisible ? 'projectH-animation' : ''}`}>Opportunities</h2>
            <br />
            <ul className="oppul">
              <li className={`${'oppli1'} ${projectIsVisible ? 'oppli1-animation' : ''}`}>Learned about animations, content creation and even photography</li><br />
              <li className={`${'oppli2'} ${projectIsVisible ? 'oppli2-animation' : ''}`}>Learned about polyfills and scripts to get animations to work on more browsers</li>
            </ul>
        </div>
    )
}