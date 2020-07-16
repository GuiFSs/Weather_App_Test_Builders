import { combineReducers } from 'redux';
import weatherReducer from './weather/reducer';
import preferencesReducer from './preferences/reducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  preferences: preferencesReducer,
});

export default rootReducer;
