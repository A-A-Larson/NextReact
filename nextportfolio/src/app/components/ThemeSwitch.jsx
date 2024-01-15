"use client";
import { useEffect, useState } from 'react';
import { LuLightbulb } from "react-icons/lu";
import { LuLightbulbOff } from "react-icons/lu";


const ThemeSwitch = () => {
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
        <div 
            className='
                flex 
                justify-center
                '
        >
            <LuLightbulbOff 
                className='
                    text-white 
                    hidden 
                    dark:block'
                size={40} 
                onClick={() => setDarkMode(!darkMode)}
            />
            <LuLightbulb
                className='                     
                    text-yellow-400 
                    block 
                    dark:hidden'
                size={40} 
                onClick={() => setDarkMode(!darkMode)}
            /> 
            
        </div>
    )
}

export default ThemeSwitch;