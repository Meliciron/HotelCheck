import * as AcionTypes from '../constants';

export const addOrRemoveFavoriteItem = (payload) => {
  return {
    type: AcionTypes.ADD_OR_REMOVE_FAVORITE_ITEM,
    payload,
  };
};

export const setHotels = (payload) => {
  return {
    type: AcionTypes.SET_HOTELS,
    payload,
  };
};

export const getHotels = () => {
  return {
    type: AcionTypes.GET_HOTELS,
  };
};

export const sortRatingByIncrease = () => {
  return {
    type: AcionTypes.SORT_RATING_BY_INCREASE,
  };
};

export const setDataForRequest = (payload) => {
  return {
    type: AcionTypes.SET_DATA_FOR_REQUEST,
    payload,
  };
};

export const sortRatingByDecrease = () => {
  return {
    type: AcionTypes.SORT_RATING_BY_DECREASE,
  };
};

export const sortPriceByIncrease = () => {
  return {
    type: AcionTypes.SORT_PRICE_BY_INCREASE,
  };
};

export const sortPriceByDecrease = () => {
  return {
    type: AcionTypes.SORT_PRICE_BY_DECREASE,
  };
};
