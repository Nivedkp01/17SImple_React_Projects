import React from 'react'
import useTheme from './useTheme'

import './DarkLight.css'
function DarkLight() {
    const [theme, setTheme] = useTheme('theme', 'dark')

    function handleToggle()
    {
        setTheme(theme==='dark' ?'light':'dark')
    }
    return (
        <div className='container' dataTheme={theme}>

            <h1>Hello My Name Is Nived K P</h1>
            <h2>Iam A Web Developer At Amazon</h2>
            <button onClick={handleToggle}>Let's Change The Theme</button>
        </div>
    )
}

export default DarkLight