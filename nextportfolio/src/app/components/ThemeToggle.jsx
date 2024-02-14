"use client";
import { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';
import { LuLightbulb } from "react-icons/lu";
import { LuLightbulbOff } from "react-icons/lu";


const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        if (theme === 'dark') setDarkMode(true)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    return (
        <div className='
                fixed z-30
                right-0
                py-2 
                flex 
                justify-center
                '
        >            
                <LuLightbulbOff 
                    className="text-white hidden dark:block" 
                    size={18} 
                    onClick={() => setDarkMode(!darkMode)}
                />
                
                <LuLightbulb
                    className='ml-auto text-yellow-400 block dark:hidden'
                    size={18} 
                    onClick={() => setDarkMode(!darkMode)}
                /> 
            
        </div>
    )
}

export default ThemeToggle;