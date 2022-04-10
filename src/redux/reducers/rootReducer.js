import { combineReducers } from 'redux';
import favoritesReducer from './favorites';
import hotelsReducer from './hotels';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  hotels: hotelsReducer,
});

export default rootReducer;
