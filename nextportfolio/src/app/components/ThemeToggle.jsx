"use client";
import { LuLightbulb, LuLightbulbOff } from "react-icons/lu";
import { useTheme } from "../context/ThemeContext";


const ThemeToggle = () => {
    const { darkMode, setDarkMode } = useTheme();

    // useEffect(() => {
    //     const theme = localStorage.getItem('theme')
    //     if (theme === 'dark') setDarkMode(true)
    // }, [])

    // useEffect(() => {
    //     if (darkMode) {
    //         document.documentElement.classList.add('dark')
    //         localStorage.setItem('theme', 'dark')
    //     } else {
    //         document.documentElement.classList.remove('dark')
    //         localStorage.setItem('theme', 'light')
    //     }
    // }, [darkMode])

    return (
        <div className='themetoggle 
                        navAnchor 
                        dark:text-darkHdrClr'
        >            
                <LuLightbulbOff 
                    className='  
                        hidden dark:block
                        text-white
                        ' 
                    size={30} 
                    onClick={() => setDarkMode(!darkMode)}
                />
                
                <LuLightbulb
                    className='
                        block dark:hidden 
                        text-yellow-400
                        '
                    size={30} 
                    onClick={() => setDarkMode(!darkMode)}
                />
            
        </div>
    )
}

export default ThemeToggle;