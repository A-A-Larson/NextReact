"use client";
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
        <section className='
            flex
            flex-col
            p-8
            border-b
            
            '
        >
            <h1 className='flex-1 flex flex-col justify-center items-center text-3xl'>
                Tech Stack:
            </h1>
            <div className='
                flex 
                flex-1
                flex-col
                md:flex-row
                justify-center
                content-center'
            >
                <div className='flex-1 flex justify-start items-start text-lg'>
                    <ul className=''> Languages:
                        <li className='flex flex-row'><FaHtml5 /> HTML</li>
                        <li className='flex flex-row'><FaCss3Alt /> CSS</li>
                        <li className='flex flex-row'><SiJavascript /> Javascript</li>
                        <li className='flex flex-row'><FaJava /> Java</li>
                        <li className='flex flex-row'><FaReact /> React</li>
                    </ul>
                </div>
                <div className='flex-1 flex justify-start items-start text-lg'>
                    <ul className=''> Web Technologies:
                        <li className='flex flex-row'><SiNextdotjs /> Next.js</li>
                        <li className='flex flex-row'><FaNpm /> NPM</li>
                        <li className='flex flex-row'><SiTailwindcss /> Tailwind</li>
                    </ul>                
                </div>
            </div>
        </section>
    )
}