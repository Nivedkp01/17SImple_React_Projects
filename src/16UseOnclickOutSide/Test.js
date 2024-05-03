import React, { useRef, useState } from 'react'
import useOnClickOutSide from './useOnClickOutSide';

function Test() {
    const [show,setShow]=useState(false)
    const ref=useRef();
    useOnClickOutSide(ref,()=>{setShow((false))})
  return (
    <div ref={ref}   style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        {show ? <div><h1>This Is A random Content</h1>
        <p>Please Click Outside Of It To Close This! It Wont Close If You Click Inside It</p>
         </div>:<button onClick={()=>{setShow(true)}}>Show</button>}
    </div>
  )
}

export default Test