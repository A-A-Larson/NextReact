'use client';



export default function CallToAction() {
    return (
        <div className="main__action">
            <a className="main__scroll" 
               href="#Scroll-Location" 
               aria-label="Call to action that scrolls to the about me section of the page." 
               aria-hidden="true">              
                <div className="main__scroll-box">
                    <svg className="main__scroll-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none">                            
                        </path>
                        <path className="fill-lightHdrClr dark:fill-darkHdrClr" 
                        d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z">
                        </path>
                    </svg>
                </div>                      
            </a>
        </div>
    )
}