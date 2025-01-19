export default function Project() {
   

    return (
        <div
          className='
            projectDiv 
            text-lightHdrClr 
            dark:text-darkHdrClr'
        >
            <h2 className='projectH2'>This Project</h2> <br/>
            
            <div className="projectContentContainer">

              <div className="goalContainer">
                <h3 className='projectH3-1'>Goals</h3>              
                <ul className="goalsul">
                  <li className='goalsli1'>Build a modular portfolio I can add to over time</li>
                  <li className='goalsli2'>Get more experience using Next.js, Tailwind CSS, and React</li>
                  <li className='goalsli3'>Practiced what I&apos;ve learned of responsive web design and accessibility</li>
                </ul>
              </div>

              <div className="oppContainer">
                <h3 className='projectH3-2'>Opportunities</h3>
                <ul className="oppul">
                  <li className='oppli1'>Learned about animations, content creation and even photography</li>
                  <li className='oppli2'>Learned about polyfills and scripts to get animations to work on more browsers</li>
                </ul>
              </div>

            </div>
        </div>
    )
}