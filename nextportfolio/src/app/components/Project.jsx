export default function Project() {
   

    return (
        <div
              className='projectDiv 
                        text-lightHdrClr 
                        dark:text-darkHdrClr'>
            <h1 className='projectH1'>This Project</h1> <br/>
            <h2 className='projectH2-1'>Goals</h2>
            
            <ul className="goalsul">
              <li className='goalsli1'>Build a modular portfolio I can add to over time</li>
              <li className='goalsli2'>Get more experience using Next.js, Tailwind CSS, and React</li>
              <li className='goalsli3'>Practiced what I&apos;ve learned of responsive web design and accessibility</li>
            </ul>
            <h2 className='projectH2-2'>Opportunities</h2>
            <ul className="oppul">
              <li className='oppli1'>Learned about animations, content creation and even photography</li>
              <li className='oppli2'>Learned about polyfills and scripts to get animations to work on more browsers</li>
            </ul>
        </div>
    )
}