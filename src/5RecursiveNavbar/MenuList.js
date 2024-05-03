

import React from 'react';
import MenuItem from './MenuItem';



function MenuList({ data = [] }) {
    return (
      <div className='menu-list-container'>
        {data && data.length
          ? data.map((item)=>{
            return(<MenuItem item={item}/>)
          })
          : null}
      </div>
    );
  }
  
  export default MenuList;