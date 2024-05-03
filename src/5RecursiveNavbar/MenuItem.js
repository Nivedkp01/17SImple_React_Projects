import React, { useState } from 'react';
import MenuList from './MenuList';
import './Navbar.css'
function MenuItem({ item }) {
    const itemStyle = {
        paddingLeft: `${20 * item.level}px`,
        margin: '20px',
        display: 'flex',
        gap: '10px'
    };

    const [display, setDisplay] = useState({});

    function handleToggle(id) {
        setDisplay((prevDisplay) => ({
            ...prevDisplay,
            [id]: !prevDisplay[id]
        }));
    }

    return (
        <div className=''>
            <div style={itemStyle}>
                <li>{item.label}</li>
                {item.children && item.children.length > 0 && <button onClick={() => handleToggle(item.id)}>{display[item.id]?'-':'+'}</button>
                    
                }
            </div>

            {(display[item.id] && item.children && item.children.length > 0 )? (
                <MenuList data={item.children} />
            ):null}
        </div>
    );
}

export default MenuItem;
