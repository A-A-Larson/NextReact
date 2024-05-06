"use client";
import React from 'react';
import ThemeToggle from './ThemeToggle';
import { FaHome } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

export default function NavHeader() {
    return (
        <nav className='
                navHeader
                bg-lightBG
                dark:bg-darkBG
                grow
                '>
            <ul className='navUL'>
                <li className='navLI dark:text-darkTxtClr'>
                    <a 
                        href="#"
                        className='navAnchor'
                    >
                        <FaHome size={30} />
                    </a>
                </li>
                <li className='navLI dark:text-darkTxtClr'>
                    <a 
                        href="https://github.com/drewdarko0"
                        className='navAnchor'
                    >
                        <FaCode size={30} />
                    </a>
                </li>
                <li className='navLI dark:text-darkTxtClr'>
                    <a 
                        href="mailto:drewlars83@gmail.com"
                        className='navAnchor'
                    >
                        <IoMdContact size={30} />
                    </a>
                </li>
                <li className='navLI'>
                    <a 
                        
                        className='navAnchor'
                    >
                        <ThemeToggle />
                    </a>
                </li>
            </ul>
        </nav>
    )
};