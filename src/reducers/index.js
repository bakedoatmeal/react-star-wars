import { combineReducers } from "redux";
import starWarsReducer from './star-wars-reducer';

export default combineReducers({
  starWars: starWarsReducer
})