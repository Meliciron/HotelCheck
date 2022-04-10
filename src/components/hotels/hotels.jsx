import React from 'react';
import './hotels.css';
import { convertDate, declensionHotel } from '../../utils/hotelsUtil';

import Container from '../common/container/container';
import ArrowImg from '../../img/arrow.svg';
import Slider from '../common/slider/slider';
import SliderCard from '../common/sliderCard/sliderCard';
import HotelRow from '../common/hotelRow/hotelRow';
import HouseImg from '.././../img/house.svg';
import Empty from '../common/empty/empty';
import Image1 from '../../img/img1.jpg';
import Image2 from '../../img/img2.jpg';
import Image3 from '../../img/img3.jpg';
import Image4 from '../../img/img4.jpg';
import Image5 from '../../img/img5.jpg';

function Hotels({ hotels, favorites, searchInfo }) {
  const checkIsFavorite = (item) => {
    return favorites.some((hotel) => hotel.hotelName === item.hotelName);
  };

  return (
    <Container className="additional-paddings width-not-default">
      <div className="hotels__header-wrapper">
        <div className="hotels__header-half-wrapper">
          <h3 className="hotels__header-title">
            {`Отели`}
            <img className="hotels__header-arrow" src={ArrowImg} alt="arow" />
            {searchInfo.city}
          </h3>
        </div>
        <div className="hotels__header-half-wrapper">
          <span>{convertDate(searchInfo.checkIn)}</span>
        </div>
      </div>
      <div className="hotels__swiper-wrapper">
        <Slider spaceBetween={12} slidesPerView={'auto'}>
          <SliderCard>
            <img src={Image1} alt="slide" />
          </SliderCard>
          <SliderCard>
            <img src={Image2} alt="slide" />
          </SliderCard>
          <SliderCard>
            <img src={Image3} alt="slide" />
          </SliderCard>
          <SliderCard>
            <img src={Image4} alt="slide" />
          </SliderCard>
          <SliderCard>
            <img src={Image5} alt="slide" />
          </SliderCard>
        </Slider>
      </div>
      <div className="hotels__list-wrapper">
        <h4 className="hotels__list-subtitle">
          Добавлено в Избранное:
          <span className="hotels__list-subtitle-amout">
            {` ${favorites.length}`}
          </span>{' '}
          {declensionHotel(favorites.length)}
        </h4>
        {hotels.length > 0 ? (
          <div className="hotels__list-inner">
            {hotels.map((item) => {
              return (
                <HotelRow
                  key={item.hotelName}
                  img={HouseImg}
                  hotel={item}
                  checkIn={searchInfo.checkIn}
                  duration={searchInfo.duration}
                  isFavorite={checkIsFavorite(item)}
                  className="margins-reduced"
                />
              );
            })}
          </div>
        ) : (
          <Empty classname="hotels">
            <div>
              По вашему запросу
              <span className="text_bold">{` ${searchInfo.city} `}</span>
              ничего не найдено
            </div>
          </Empty>
        )}
      </div>
    </Container>
  );
}

export default Hotels;
