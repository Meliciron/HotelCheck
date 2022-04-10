import React from 'react';
import './favorites.css';

import Container from '../common/container/container';
import SectionTitle from '../common/sectionTitle/sectionTitle';
import HotelRow from '../common/hotelRow/hotelRow';
import SortButton from '../common/sortButton/sortButton';
import Empty from '../common/empty/empty';
import { useDispatch } from 'react-redux';
import {
  sortRatingByDecrease,
  sortRatingByIncrease,
  sortPriceByIncrease,
  sortPriceByDecrease,
} from '../../redux/actions/actionCreator';

function Favorites({ favorites, searchInfo }) {
  const [sortCategory, setSortCategory] = React.useState();
  const dipatch = useDispatch();

  const sort = (sortAction) => {
    if (favorites.length > 0) {
      dipatch(sortAction());
    }
  };

  return (
    <Container className="aditional-margin-top favorites">
      <div className="favorites__title-wrapper">
        <SectionTitle>Избранное</SectionTitle>
      </div>
      {favorites.length === 0 ? (
        <Empty>Здесь пока пусто...</Empty>
      ) : (
        <div>
          <div className="favorites__sort-btns-container">
            <div className="favorites__sort-btn-wrapper">
              <SortButton
                isActive={sortCategory === 'rating' ? true : false}
                onClick={() => setSortCategory('rating')}
                upArrowClick={() => sort(sortRatingByIncrease)}
                downArrowClick={() => sort(sortRatingByDecrease)}
              >
                Рейтинг
              </SortButton>
            </div>
            <SortButton
              isActive={sortCategory === 'price' ? true : false}
              onClick={() => setSortCategory('price')}
              upArrowClick={() => sort(sortPriceByIncrease)}
              downArrowClick={() => sort(sortPriceByDecrease)}
            >
              Цена
            </SortButton>
          </div>
          <div className="favorites__content">
            {favorites.length > 0 &&
              favorites.map((item) => {
                return (
                  <HotelRow
                    key={item.hotelName}
                    hotel={item}
                    isFavorite={true}
                    checkIn={item.checkIn}
                    duration={item.duration}
                  />
                );
              })}
          </div>
        </div>
      )}
    </Container>
  );
}

export default Favorites;
