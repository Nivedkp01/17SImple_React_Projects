import React from 'react'
import './Modal.css'

function Modal({handleModal}) {
  return (
    <div className='container'>
    <div style={{backgroundColor:'beige',width:'50%',height:'50%',position:'relative'}}>
        <div style={{position:'absolute',right:'0',margin:'10px'}} onClick={handleModal} >X</div>
    </div>
    </div>
  )
}

export default Modal