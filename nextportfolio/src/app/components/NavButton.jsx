'use client';
import React from 'react';
import ThemeToggle from './ThemeToggle';
import { FaPlus } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

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
                    <a href="https://github.com/drewdarko0" className="menu-item"><FaCode size={30} /></a>
                    <a href="mailto:drewlars83@gmail.com" className="menu-item"><IoMdContact size={30} /></a>
                    <a className="menu-item"><ThemeToggle /></a>
                </menu>
            </div>            
        </nav>
    )
};