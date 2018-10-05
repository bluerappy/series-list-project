import { combineReducers } from 'redux';
import seriesListReducer from './getSeriesList-reducer'


const reducers = {
  seriesListStore: seriesListReducer,
}
console.log("index reducer")
const rootReducer = combineReducers(reducers);

export default rootReducer;