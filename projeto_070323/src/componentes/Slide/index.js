/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import {Carrossel} from './carrossel.js';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import './style.css';

export default function Slide({slides}) {
  
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current ===  0 ? length - 1 : current - 1)
  }

  //console.log(current);

  if(!Array.isArray(slides) || slides.length <=0){
    return null;
  }

  return (
      <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
        {Carrossel.map((slide, index)=> {
          return(
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (
                <div className='slider-inter'>
                  <a href={slide.url} className='slider-a'>
                    <img src={slide.image} alt={slide.alt} title={slide.title} className='slider-img'/>
                    <h2 className='slider-h2'>{slide.newsTitle}</h2>
                    <p className='slider-p'>{slide.news}</p>
                  </a>
                </div>
              )}
            </div>
            
          )
        })}
      </section>
  );
}

