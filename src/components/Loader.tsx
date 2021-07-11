import React from 'react';
import './loader.style.css';

const Loader = () => {  
    
    return (
        <div className='loader' data-testid='loaderTest'>
            <div className='bubble' />
            <div className='bubble' />
            <div className='bubble' />
        </div>
    )
}

export default Loader;
