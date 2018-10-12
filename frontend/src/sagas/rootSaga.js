import { all, fork , spawn } from 'redux-saga/effects';
import {getSeriesListWatcherSaga} from './getSeriesList-saga';
import {postNewSeriesWatcherSaga} from './postNewSeries-saga';
import {postNewProjectWatcherSaga} from './postNewProject-saga';
import {getProjectListWatcherSaga} from './getProjectList-saga';

export function* rootSaga() {
    yield fork(root);
  }

function* root() {
  try {
   yield all([
        spawn (getSeriesListWatcherSaga),
        spawn (postNewSeriesWatcherSaga),
        spawn (postNewProjectWatcherSaga), 
        spawn (getProjectListWatcherSaga),   
   ]);
  }
  catch(error) {

  }
}