import { takeLatest, call, put } from 'redux-saga/effects';
import io from 'socket.io-client/dist/socket.io';
import feathers from '@feathersjs/client';
import {GETSERIESLIST_REQUEST} from "../actions/getSeriesList-action"

const socket = io('http://127.0.0.1:3030');

export const app = feathers();
  app.configure(feathers.socketio(socket));
  app.configure(feathers.authentication({
  storage: localStorage,
}));

export function* getSeriesListWatcherSaga() {
    // console.log("watcherSaga")
    yield takeLatest(GETSERIESLIST_REQUEST , getSeriesListworkerSaga);
  }

function* getSeriesListworkerSaga() {
    // console.log("startWorker")
  try {
    const response = yield call(getSeriesList);
    // console.log("workerSaga",response)
    const data = response.data;
    yield put({ type: "GETSERIESLIST_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "GETSERIESLIST_FAILURE", payload: error });
  }
}
function getSeriesList() {
    return app.service('series-list').find()
}