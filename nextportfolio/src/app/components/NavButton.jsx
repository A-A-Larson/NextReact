'use client';
import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function NavButton() {

    const openMenu = () => {
        document.getElementById('circularMenu').classList.toggle('active');
    }

    return (
        <div>
            <div id="circularMenu" className="circular-menu">

                <a className="floating-btn" onClick={openMenu}>
                    <i className="fa fa-plus"></i>
                </a>

                <menu className="items-wrapper">
                    <a href="#" className="menu-item fa fa-facebook"></a>
                    <a href="#" className="menu-item fa fa-twitter"></a>
                    <a href="#" className="menu-item fa fa-google-plus"></a>
                    <a href="#" className="menu-item "><ThemeToggle /></a>
                </menu>
            </div>            
        </div>
    )
};