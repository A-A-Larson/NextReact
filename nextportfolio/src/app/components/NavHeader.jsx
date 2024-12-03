"use client";
import React from 'react';
import ThemeToggle from './ThemeToggle';
import { FaHome } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export default function NavHeader() {
    return (
        <nav className='
                navHeader
                bg-lightBG
                dark:bg-darkBG
                '>
            <ul className='navUL'>
                <li className='navLI dark:text-darkTxtClr cardWrapper'>
                    <a 
                        href="#"
                        className='navAnchor'
                        aria-label="Home button that scrolls to the top of the page."
                        aria-hidden="true"
                    >
                        <FaHome size={30} />
                    </a>Home
                </li>
                <li className='navLI dark:text-darkTxtClr cardWrapper'>
                    <a 
                        href="https://github.com/A-A-Larson"
                        className='navAnchor'
                        aria-label="A link to my GitHub profile"
                        aria-hidden="true"
                    >
                        <FaGithub size={28} />
                    </a>GitHub
                </li>
                <li className='navLI dark:text-darkTxtClr cardWrapper'>
                    <a 
                        href="https://www.linkedin.com/in/andrew-larson-0bb59b218"
                        className='navAnchor'
                        aria-label="A link to my linkedin profile."
                        aria-hidden="true"
                    >
                        <FaLinkedin size={28} />
                    </a>LinkedIn
                </li>
                <li className='navLI dark:text-darkTxtClr cardWrapper'>
                    <a 
                        href="mailto:drewlars83@gmail.com"
                        className='navAnchor'
                        aria-label="A link to my email address."
                        aria-hidden="true"
                    >
                        <IoIosMail size={30} />
                    </a>Contact Me
                </li>
                <li className='navLI dark:text-darkTxtClr cardWrapper'>
                    
                    <ThemeToggle />
                    On/Off
                </li>
            </ul>
        </nav>
    )
};