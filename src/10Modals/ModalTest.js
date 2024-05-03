import React, { useState } from 'react'
import Modal from './Modal'
import './ModalTest.css'


function ModalTest() {
    function handleModal()
    {
        setShow((prev)=>{
            return(!prev)
        })
    }
    const [show,setShow]=useState(false)
  return (
    <div >
        <button className={!show?'active':'inactive'} style={{marginLeft:'45%'}} onClick={()=>{handleModal()}}>{!show?'Show Modal': 'hide'}  </button>
        {show ? <Modal handleModal={handleModal}/>:null}

    </div>
  )
}

export default ModalTest