import { combineReducers } from 'redux';
import seriesListReducer from './getSeriesList-reducer';
import projectListReducer from './postNewProject-reducer';
import alertReducer from './alert-reducer';
import getProjectListReducer from './getProjectList-reducer';

const reducers = {
  seriesListStore: seriesListReducer,
  projectListStore: projectListReducer,
  alertStore: alertReducer,
  getProjectListStore : getProjectListReducer
}
const rootReducer = combineReducers(reducers);

export default rootReducer;