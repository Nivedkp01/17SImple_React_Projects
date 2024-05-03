import React, { useRef } from 'react'

function ScrollSection() {
    const data=[
        {
            label:'First Card',
            style:{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                width:'100%',
                height:'600px',
                background:'skyBlue'
            }
        },
        {
            label:'Second Card',
            style:{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                width:'100%',
                height:'600px',
                background:'lightYellow'
            }
        },
        {
            label:'Third Card',
            style:{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                width:'100%',
                height:'600px',
                background:'lightblue'
            }
        },
        {
            label:'Fourth Card',
            style:{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                width:'100%',
                height:'600px',
                background:'lightPink'
            }
        },
        {
            label:'Fifth Card',
            style:{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                width:'100%',
                height:'600px',
                background:'lightGreen'
            }
        },
    ]


    const ref=useRef()

    function handleScroll()
    {
        ref.current.scrollIntoView({behaviour:'smooth'})
    }
  return (
    <div style={{}}>
        <button onClick={handleScroll}>Go</button>
        {data.map((item,index)=>{
            return(<div style={item.style} ref={index===4?ref:null}>{item.label}</div>)
        })}
    </div>
  )
}

export default ScrollSection