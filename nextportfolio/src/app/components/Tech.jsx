"use cdivent";
import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Tech() {
    return (
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
    )
}