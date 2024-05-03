import React, { useEffect, useState } from 'react';
import './ScrollIndicator.css';

function ScrollIndicator({ url }) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [scroll, setScroll] = useState(0);

    async function fetchData(url) {
        setLoading(true);
        const Data = await fetch(url);
        const response = await Data.json();
        const actualdata = response.products;
        setData(actualdata);
        setLoading(false);
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);

    function handleScroll() {
        const howmuchScrolled = window.scrollY;
        const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (howmuchScrolled / totalScrollableHeight) * 100;
        setScroll(scrollPercentage);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    if (loading) {
        return <div>Loading Please wait...</div>;
    }

    return (
        <div className='outer'>
            <div className='scroll' style={{ width: `${scroll}%`, height: '1%', backgroundColor: 'gray', position: 'fixed', top: '30px',margin:'-30px' }}></div>
            <div className='container'>
                {data.map((item, index) => (
                    <h4 key={index}>{item.title}</h4>
                ))}
            </div>
        </div>
    );
}

export default ScrollIndicator;
