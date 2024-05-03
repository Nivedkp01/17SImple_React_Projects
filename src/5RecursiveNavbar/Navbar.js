import React from 'react'
import MenuList from './MenuList'


function Navbar({data=[]}) {
  return (
    <div>
        <MenuList data={data}/>
    </div>
  )
}

export default Navbar