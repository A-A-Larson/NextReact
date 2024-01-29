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
                pt-2
                '
        >            
            <div className="toggle">
                <input 
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                />
                <span className="button"></span>
                <span className="label ">
                    <LuLightbulbOff 
                        className='
                            m-auto
                            dkbutton
                            text-black 
                            hidden 
                            dark:flex
                            '
                        size={50} 
                    />
                    <LuLightbulb
                        className='                           
                            m-auto 
                            text-yellow-400
                            dark:hidden
                            '
                        size={50} 
                    />
                </span>
            </div>
            
            {/* <LuLightbulbOff 
                className='
                    dkbutton
                    text-black 
                    hidden 
                    dark:block
                    '
                size={50} 
                onClick={() => setDarkMode(!darkMode)}
            />
            <LuLightbulb
                className='
                    libutton                     
                    text-yellow-400 
                    block 
                    dark:hidden
                    '
                size={50} 
                onClick={() => setDarkMode(!darkMode)}
            />  */}
            
        </div>
    )
}

export default ThemeSwitch;