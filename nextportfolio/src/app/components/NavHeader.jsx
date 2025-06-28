"use client";
import React from 'react';
import ThemeToggle from './ThemeToggle';
import { FaHome } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function NavHeader() {
  const { darkMode, setDarkMode } = useTheme();
    return (
        <nav className='
                navHeader
                bg-lightBG
                dark:bg-darkBG
                '>
            <ul className='navUL'>
                <a 
                        href="#"
                        className='navAnchor'
                        aria-label="Home button that scrolls to the top of the page."
                        aria-hidden="true"
                    >
                    <li className='
                    navLI 
                    bg-lightBG
                    dark:hover:bg-darkHoverClr
                    hover:bg-darkHdrClr
                    dark:bg-darkBG 
                    dark:text-darkTxtClr 
                    navHeaderButtons'>                        
                        <FaHome size={30} />
                        Home
                    </li>
                </a>
                <a 
                    href="https://github.com/A-A-Larson"
                    className='navAnchor'
                    aria-label="A link to my GitHub profile"
                    aria-hidden="true"
                >
                    <li className='
                    navLI 
                    bg-lightBG
                    dark:hover:bg-darkHoverClr
                    hover:bg-darkHdrClr
                    hover:bg-backgroundLightAccent
                    dark:bg-darkBG 
                    dark:text-darkTxtClr 
                    navHeaderButtons'>
                        
                            <FaGithub size={30} />
                        GitHub
                    </li>
                </a>
                <a 
                    href="https://www.linkedin.com/in/andrew-larson-0bb59b218"
                    className='navAnchor'
                    aria-label="A link to my linkedin profile."
                    aria-hidden="true"
                >
                    <li className='
                    navLI 
                    bg-lightBG
                    dark:hover:bg-darkHoverClr
                    hover:bg-darkHdrClr
                    hover:bg-backgroundLightAccent
                    dark:bg-darkBG 
                    dark:text-darkTxtClr 
                    navHeaderButtons'>                    
                        <FaLinkedin size={30} />
                        LinkedIn
                    </li>
                </a>
                <a 
                    href="mailto:drewlars83@gmail.com"
                    className='navAnchor'
                    aria-label="A link to my email address."
                    aria-hidden="true"
                >
                    <li className='
                    navLI 
                    bg-lightBG
                    dark:hover:bg-darkHoverClr
                    hover:bg-darkHdrClr
                    hover:bg-backgroundLightAccent
                    dark:bg-darkBG 
                    dark:text-darkTxtClr 
                    navHeaderButtons'>                    
                        <IoIosMail size={30} />
                        Contact Me
                    </li>
                </a>
                <button
                    href="mailto:drewlars83@gmail.com"
                    className='navAnchor'
                    aria-label="A link to my email address."
                    aria-hidden="true"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    <li className='
                    navLI 
                    bg-lightBG
                    dark:hover:bg-darkHoverClr
                    hover:bg-darkHdrClr
                    hover:bg-backgroundLightAccent
                    dark:bg-darkBG 
                    dark:text-darkTxtClr 
                    navHeaderButtons'>
                        
                        <ThemeToggle />
                        On/Off
                    </li>
                </button>
            </ul>
        </nav>
    )
};