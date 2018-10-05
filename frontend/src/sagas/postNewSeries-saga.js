import { takeLatest, call, put } from 'redux-saga/effects';
import io from 'socket.io-client/dist/socket.io';
import feathers from '@feathersjs/client';
import {POSTNEWSERIES_REQUEST} from "../actions/postNewSeries-action"

const socket = io('http://127.0.0.1:3030');

export const app = feathers();
  app.configure(feathers.socketio(socket));
  app.configure(feathers.authentication({
  storage: localStorage,
}));

export function* postNewSeriesWatcherSaga() {
    console.log("post watcherSaga")
    yield takeLatest(POSTNEWSERIES_REQUEST , postNewSeriesWorkerSaga);
  }

function* postNewSeriesWorkerSaga(obj) {
    console.log(" post startWorker")
  try {
    const response = yield call(postNewSeries, obj.payload);
    console.log("post workerSaga",response)
    const data = response.data;
    yield put({ type: "POSTNEWSERIES_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "POSTNEWSERIES_FAILURE", payload: error });
  }
}
function postNewSeries(obj) {
  console.log("HEELLLOO")
    return app.service('series-list').create({
      title : obj.title,
      genre : obj.genre,
      year : obj.year,
    }
    )
}