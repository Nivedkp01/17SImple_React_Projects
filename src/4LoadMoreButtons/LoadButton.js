import React, { useEffect, useState } from 'react';
import './LoadButton.css';

function LoadButton() {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    

    async function fetchImages() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            
            const data = await response.json();
            const fetchedProducts = data.products;
            
            // setProducts((prevProducts) => [...prevProducts, ...fetchedProducts]);
            setProducts(fetchedProducts)
            setLoading(false);
        } catch (e) {
            setError(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchImages();
    }, [count]);

    if (error !== '') {
        alert(`Something went wrong ${error}`);
    }

    function handleNext() {
        setCount(count + 1);
    }

    function handlePrev() {
        setCount(count - 1);
    }

    return (
        <div className='man'>
            <div className='images'>
                {products.map((item, index) => (
                    <div key={index} className='card'>
                        <img className='imgbro' src={item.images[0]} alt={item.brand} />
                        <h3>{item.brand}</h3>
                    </div>
                ))}
            </div>

            <div>
                {count === 0 ? (
                    <button className="btnhide">
                        Prev Page
                    </button>
                ) : (
                    <button className="btn" onClick={handlePrev}>
                        Prev Page
                    </button>
                )}
                {count < 4 ? (
                    <button className="btn" onClick={handleNext}>
                        Next Page
                    </button>
                ) : (
                    <button className="btn" disabled>
                        No more pages to go
                    </button>
                )}
            </div>
        </div>
    );
}

export default LoadButton;
