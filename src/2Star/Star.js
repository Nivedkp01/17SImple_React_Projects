import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './Star.css'

function Star(props) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);


    const handleClick = (index) => {
        console.log(index);
        setRating(index)
    };

    const handleMouseEnter = (index) => {
            console.log(index)
            setHover(index);
       
    };

    const handleMouseOut = () => {
        setHover(rating); 
    };

    return (
        <div>
            {[...Array(props.number)].map((_, index) => (
                <FaStar
                    key={index}
                    size={40}
                    onClick={() => handleClick(index + 1)}
                    onMouseEnter={() => handleMouseEnter(index + 1)}
                    onMouseOut={handleMouseOut}
                    className={index + 1 <= (hover || rating) ? "active" : "inactive"}
                />
            ))}
        </div>
    );
}

export default Star;
