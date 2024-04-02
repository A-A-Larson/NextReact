"use client";
import React from 'react';
import ThemeToggle from './ThemeToggle';
import { FaHome } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

export default function NavHeader() {
    return (
        <nav className='navHeader'>
            <ul className='navUL'>
                <li className='navLI'>
                    <a 
                        href="#"
                        className='navAnchor'
                    >
                        <FaHome size={30} />
                    </a>
                </li>
                <li className='navLI'>
                    <a 
                        href="#"
                        className='navAnchor'
                    >
                        <FaCode size={30} />
                    </a>
                </li>
                <li className='navLI'>
                    <a 
                        href="#"
                        className='navAnchor'
                    >
                        <IoMdContact size={30} />
                    </a>
                </li>
                <li className='navLI'>
                    <a 
                        href="#"
                        className='navAnchor'
                    >
                        <ThemeToggle />
                    </a>
                </li>
            </ul>
        </nav>
    )
};