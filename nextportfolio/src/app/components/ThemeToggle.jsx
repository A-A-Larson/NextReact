"use client";
import { useEffect, useState } from 'react';
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
                z-30
                cursor-pointer
                flex
                justify-center
                items-center
                h-full
                '
        >            
                <LuLightbulbOff 
                    className='
                        text-white 
                        hidden 
                        dark:block
                        ' 
                    size={36} 
                    onClick={() => setDarkMode(!darkMode)}
                />
                
                <LuLightbulb
                    className='
                    text-yellow-400 
                    block 
                    dark:hidden
                    '
                    size={36} 
                    onClick={() => setDarkMode(!darkMode)}
                /> 
            
        </div>
    )
}

export default ThemeToggle;