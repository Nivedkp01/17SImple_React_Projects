import React from 'react';
import useFetch from './useFetch';

function Test() {
    const { data, error, pending } = useFetch('https://dummyjson.com/products');
    // console.log(data, error, pending);
    console.log(data.products)


    return (
        <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        <h1 style={{textAlign:'center'}}>useFetch </h1>
            {data && data.products && data.products.length  ?
            data.products.map((item)=>{
                return(<h4>{item.title}</h4>)
            }):null}
        </div>
    );
}

export default Test;
