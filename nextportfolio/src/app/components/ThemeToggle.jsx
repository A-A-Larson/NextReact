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
        <div className='themetoggle flex justify-center items-center'
        >            
                <LuLightbulbOff 
                    className=' 
                        sticky
                        invisible 
                        dark:visible
                        text-white
                        ' 
                    size={30} 
                    onClick={() => setDarkMode(!darkMode)}
                />
                
                <LuLightbulb
                    className='
                        absolute
                        visible 
                        dark:invisible
                        text-yellow-400
                        '
                    size={30} 
                    onClick={() => setDarkMode(!darkMode)}
                /> 
            
        </div>
    )
}

export default ThemeToggle;