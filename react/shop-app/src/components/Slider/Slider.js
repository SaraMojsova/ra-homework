import React, { useState } from 'react';
import './Slider.css'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { RiArrowRightSLine } from 'react-icons/ri'

const Slider = ({ images = [] }) => {

    const [index, setIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = index === 0;
        const newIndex = isFirstSlide ? images.length - 1 : index - 1;
        setIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = index === images.length - 1;
        const newIndex = isLastSlide ? 0 : index + 1;
        setIndex(newIndex);
    };
    return (
        <div className="slider">
            <div className="slider-inner" style={{ transform: `translateX(-${index * 100}%)` }}>
                {images.map(({ src, title, text }, idx) => {
                    return (
                        <div className='slider-item' key={idx} style={{ backgroundImage: `url(${src})` }}>
                            <div className='slider-text'>
                                <h1>{title}</h1>
                                <p>{text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button className='previous' onClick={goToPrevious}>
                <RiArrowLeftSLine />
            </button>
            <button className='next' onClick={goToNext}>
                <RiArrowRightSLine />
            </button>

        </div>
    );
}


export default Slider;