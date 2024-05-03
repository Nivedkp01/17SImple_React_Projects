import React, { useEffect, useState } from 'react';

function Github() {
    const [value, setValue] = useState('');
    const [data, setData] = useState(null);

    async function fetchUserData() {
        const res = await fetch(`https://api.github.com/users/${value}`);
        const userData = await res.json();
        setData(userData);
    }

    function handleSearch() {
        if(value){
        fetchUserData();}
    }

    useEffect(() => {
        // This effect runs only once when the component mounts
        // because the dependency array is empty.
        // It fetches the user data for the initial value.
        if (value) {
            fetchUserData();
        }
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div>
            <input
                type='text'
                value={value}
                placeholder='Search User Name....'
                onChange={(e) => { setValue(e.target.value) }}
            />
            <button onClick={handleSearch}>Search</button>
            {data && (
                <div>
                    <h2>{data.name}</h2>
                    <p>{data.bio}</p>
                    {/* Add other user data to display */}
                </div>
            )}
        </div>
    );
}

export default Github;
