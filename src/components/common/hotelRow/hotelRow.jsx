import React from 'react';
import './hotelRow.css';

import StarRating from '../starRating/starRating';
import Like from '../like/like';
import { addOrRemoveFavoriteItem } from '../../../redux/actions/actionCreator';
import { useDispatch } from 'react-redux';
import { declensionDay } from '../../../utils/hotelsUtil';

function HotelRow({
  img,
  className = '',
  hotel,
  isFavorite,
  checkIn,
  duration,
}) {
  const dispatch = useDispatch();
  const putToFavorities = () => {
    dispatch(
      addOrRemoveFavoriteItem({
        ...hotel,
        checkIn: checkIn,
        duration: duration,
      })
    );
  };

  return (
    <div className={`hotel-row__wrapper ${className}`}>
      {img && (
        <div className="hotel-row__flex-item hotel-row__flex-item_aligned">
          <div className="hotel-row__hotel-short-icon-wrapper">
            <img
              className="hotel-row__hotel-short-icon"
              src={img}
              alt="hotel"
            />
          </div>
        </div>
      )}
      <div className="hotel-row__flex-item">
        <h4 className="hotel-row__title">{hotel.hotelName}</h4>
        <div className="hotel-row__fav-icon-wrapper">
          <Like active={isFavorite} onClick={putToFavorities} />
        </div>
        <span className="hotel-row__duration">
          {checkIn} - {duration} {declensionDay(duration)}
        </span>
        <div className="hotel-row__star-rating-wrapper">
          <StarRating value={hotel.stars} readOnly size="small" />
        </div>
        <div className="hotel-row__price-wrapper">
          <span className="hotel-row__price">Price:</span>
          <span className="hotel-row__cost">
            {Math.round(hotel.priceAvg).toLocaleString()} ₽
          </span>
        </div>
      </div>
    </div>
  );
}

export default HotelRow;
