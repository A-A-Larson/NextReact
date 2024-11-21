'use client';
import React from 'react';
import ThemeToggle from './ThemeToggle';
import { FaPlus } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function NavButton() {

    const openMenu = () => {
        document.getElementById('circularMenu').classList.toggle('active');
    }

    return (
        <nav>
            <div id="circularMenu" className="circular-menu">

                <a className="floating-btn" onClick={openMenu}>
                    <i className="flex justify-center items-center h-full text-green-700"><FaPlus /></i>
                </a>

                <menu className="items-wrapper">
                    <a href="#" className="menu-item"><FaHome size={30} /></a>
                    <a href="https://github.com/A-A-Larson" className="menu-item"><FaGithub size={30} /></a>
                    <a href="mailto:drewlars83@gmail.com" className="menu-item"><IoIosMail size={30} /></a>
                    <a className="menu-item"><ThemeToggle /></a>
                </menu>
            </div>            
        </nav>
    )
};