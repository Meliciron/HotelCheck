import { SET_HOTELS, SET_DATA_FOR_REQUEST } from '../constants';
import { today, defaultCheckOut } from '../../utils/todayDateUtil';

const initialState = {
  hotels: [],
  dataForRequest: {
    city: 'Москва',
    checkIn: today,
    checkOut: defaultCheckOut,
    duration: 1,
  },
};

const hotels = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOTELS:
      return {
        ...state,
        hotels: [...action.payload],
      };
    case SET_DATA_FOR_REQUEST:
      return {
        ...state,
        dataForRequest: { ...action.payload },
      };
    default:
      return state;
  }
};

export default hotels;
