import React, { useRef } from 'react'
import useFetch from '../../src/15Usefetch.js/useFetch.js'

function Scroll() {
  const { data, error, pending } = useFetch('https://dummyjson.com/products?limit=100');
  console.log(data)

  function handleScrollTop(){
    window.scrollTo(
      {
        top:0,
        left:0,
        behavior:'smooth'
      }
    )
  }


  // function handleScrollBottom()
  // {
  //   window.scrollTo({
  //     marginBottom:0,
  //     behavior:'smooth',
  //     left:'smooth'
  //   })
  // }

  function handleScrollBottom()
  {
    bottomRef.current.scrollIntoView({behavior:'smooth'})
  }


  const bottomRef=useRef(null)
  return (
    <div style={{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center',margin:'50px',marginBottom:'50px'}}>
    <button onClick={handleScrollBottom}>Scroll To Bottom</button>
    {data.products.map((item)=>{
      return(
      <h5>{item.title}</h5>)
    })}

    <button onClick={handleScrollTop}>Scroll To Top</button>
    <div ref={bottomRef}></div>
    </div>
  )
}

export default Scroll