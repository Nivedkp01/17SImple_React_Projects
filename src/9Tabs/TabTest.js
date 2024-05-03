import React from 'react'
import Tab from './Tab'

function TabTest() {

 const list=[
        {
            label:'Tab1',
            content:<div>Content of tab 1</div>
        },
        {
            label:'Tab2',
            content:<div>Content of tab 2</div>
        },
        {
            label:'Tab3',
            content:<div>Content of tab 3</div>
        },
    ]
  return (
    <div>
        <Tab list={list}/>
    </div>
  )
}

export default TabTest