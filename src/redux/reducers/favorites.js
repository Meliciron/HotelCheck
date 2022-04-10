import * as ActionTypes from '../constants';

const initialState = {
  favorites: [],
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_OR_REMOVE_FAVORITE_ITEM:
      if (
        state.favorites.some(
          (hotel) => hotel.hotelName === action.payload.hotelName
        )
      ) {
        return {
          ...state,
          favorites: state.favorites.filter(
            (item) => item.hotelName !== action.payload.hotelName
          ),
        };
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case ActionTypes.SORT_RATING_BY_INCREASE:
      return {
        ...state,
        favorites: [...state.favorites].sort(
          (prev, next) => next.stars - prev.stars
        ),
      };
    case ActionTypes.SORT_RATING_BY_DECREASE:
      return {
        ...state,
        favorites: [...state.favorites].sort(
          (prev, next) => prev.stars - next.stars
        ),
      };
    case ActionTypes.SORT_PRICE_BY_INCREASE:
      return {
        ...state,
        favorites: [...state.favorites].sort(
          (prev, next) => next.priceAvg - prev.priceAvg
        ),
      };
    case ActionTypes.SORT_PRICE_BY_DECREASE:
      return {
        ...state,
        favorites: [...state.favorites].sort(
          (prev, next) => prev.priceAvg - next.priceAvg
        ),
      };
    default:
      return state;
  }
};

export default favorites;
