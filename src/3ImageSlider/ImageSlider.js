import React, { useEffect, useState } from 'react';
import './ImageSlider.css'
import { BsArrowLeftCircleFill ,BsArrowRightCircleFill} from 'react-icons/bs';


function ImageSlider(props) {
    const [images, setImages] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [slide,setSlide]=useState(0)
  
    async function fetchImages(url, limit) {
        try {
            setLoading(true);
            const response = await fetch(`${url}limit=${limit}`);
            const data = await response.json();
            console.log(data);
            
            if (data) {
                setImages(data);
            }
            setLoading(false);
        } catch(e) {
            setError(e.message);
            setLoading(false);
        }
    }
  
    useEffect(() => {
        if (props.url !== '') {
            fetchImages(props.url, props.limit);
        }
    }, [props.url, props.limit]);
  
    if (loading) {
        return <div>Loading Please Wait!</div>;
    } else if (error !== '') {
        return <div>Error has occurred: {error}</div>;
    } else {
        console.log('Loading ended!!');
    }
  

    function handlePrev(){
        if(slide===0)
        {
            setSlide(images.length-1)
        }
        else
        {
            setSlide(slide-1)
        }
    }

    function handleNext(){
        if(slide==images.length-1)
        {
            setSlide(0)
        }
        else
        {
            setSlide(slide+1)
        }
    }
    return (
        <div className='main'>
           <BsArrowLeftCircleFill className='arrow left' onClick={handlePrev}/>
            {images.map((e,index) => (
                <img className={index===slide ?'imgbro':' imgbro-hide'} key={e.id} src={e.download_url} alt={`Image ${e.id}`} />
            ))}

            <BsArrowRightCircleFill className='arrow right' onClick={handleNext}/>
            <div className='circles'>
                {
                    images.length ? images.map((_,index)=>{
                        return(
                        <button onClick={()=>{setSlide(index)}} key={index} className={slide===index?'c':'c hidec'}>.</button>)
                    }):null
                }
                
            </div>
        </div>
    );
}

export default ImageSlider;
