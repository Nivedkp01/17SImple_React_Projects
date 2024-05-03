import React from 'react'
import useWindowResize from './useWindowResize'

function Test() {
    const windowSize = useWindowResize()
    const { width, height } = windowSize
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}> 
            <h1>useWindowResize</h1>
            <h4>Height is {height}</h4>
            <h4>width is {width}</h4>
        </div>
    )
}

export default Test