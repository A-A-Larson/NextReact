'use client';
import React from 'react';
import ThemeToggle from './ThemeToggle';
import { FaPlus } from "react-icons/fa";

export default function NavButton() {

    const openMenu = () => {
        document.getElementById('circularMenu').classList.toggle('active');
    }

    return (
        <div>
            <div id="circularMenu" className="circular-menu">

                <a className="floating-btn" onClick={openMenu}>
                    <i className="flex justify-center items-center h-full text-green-600"><FaPlus /></i>
                </a>

                <menu className="items-wrapper">
                    <a href="#" className="menu-item"></a>
                    <a href="#" className="menu-item"></a>
                    <a href="#" className="menu-item"></a>
                    <a href="#" className="menu-item"><ThemeToggle /></a>
                </menu>
            </div>            
        </div>
    )
};