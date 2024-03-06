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
        <section             
            className='
                techGrid                
                p-8
                border-b
                bg-white
                '
        >
            <h1 className='text-3xl bg-red-600'>
                Tech Stack:
            </h1>            
            <div className='text-lg bg-green-600'>
                <ul className=''> Languages:
                    <li className='flex flex-row'><FaHtml5 /> HTML</li>
                    <li className='flex flex-row'><FaCss3Alt /> CSS</li>
                    <li className='flex flex-row'><SiJavascript /> Javascript</li>
                    <li className='flex flex-row'><FaJava /> Java</li>
                    <li className='flex flex-row'><FaReact /> React</li>
                </ul>
            </div>
            <div className='text-lg bg-blue-600'>
                <ul className=''> Web Technologies:
                    <li className='flex flex-row'><SiNextdotjs /> Next.js</li>
                    <li className='flex flex-row'><FaNpm /> NPM</li>
                    <li className='flex flex-row'><SiTailwindcss /> Tailwind</li>
                </ul>                
            </div>            
        </section>
    )
}