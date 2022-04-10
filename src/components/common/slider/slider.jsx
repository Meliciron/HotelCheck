import React from 'react';
import './slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';

function Slider({ children, className, spaceBetween, slidesPerView }) {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      className={`slider ${className}`}
    >
      {children.map((item, index) => {
        return <SwiperSlide key={Date.now() + index}>{item}</SwiperSlide>;
      })}
    </Swiper>
  );
}

export default Slider;
