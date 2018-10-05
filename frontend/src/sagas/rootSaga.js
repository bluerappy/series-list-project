import { all, fork , spawn } from 'redux-saga/effects';
import {getSeriesListWatcherSaga} from './getSeriesList-saga';

export function* rootSaga() {
    yield fork(root);
  }

function* root() {
    console.log("ROOTSTART")
  try {
   yield all([
        spawn (getSeriesListWatcherSaga),
   ]);
  }
  catch(error) {

  }
}