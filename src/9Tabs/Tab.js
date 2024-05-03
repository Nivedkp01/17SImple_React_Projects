import React, { useState } from 'react'


function Tab({ list }) {

    const [activeIndex, setActiveIndex] = useState(-1)

    function handleClick(clickIndex) {
        setActiveIndex(clickIndex)
    }
    return (
        <div className='container'>
        <div className='tabs'>
            {list.map((item, index) => {
                return (
                    <div onClick={() => { handleClick(index) }} style={{ margin: '10px' }} className='tab' >
                        {item.label}
                    </div>

                )
            })}
        </div>

            {<div className='content'>
                {activeIndex !== -1 && list[activeIndex].content}
            </div>}
        </div>
    )
}

export default Tab