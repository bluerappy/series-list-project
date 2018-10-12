import { takeLatest, call, put } from 'redux-saga/effects';
import io from 'socket.io-client/dist/socket.io';
import feathers from '@feathersjs/client';
import {GETPROJECTLIST_REQUEST} from "../actions/getProjectList-action"

const socket = io('http://127.0.0.1:3030');

export const app = feathers();
  app.configure(feathers.socketio(socket));
  app.configure(feathers.authentication({
  storage: localStorage,
}));

export function* getProjectListWatcherSaga() {
    yield takeLatest(GETPROJECTLIST_REQUEST , getProjectListworkerSaga);
  }

function* getProjectListworkerSaga() {
  try {
    const response = yield call(getProjectList);
    const data = response.data;
    yield put({ type: "GETPROJECTLIST_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "GETPROJECTLIST_FAILURE", payload: error });
  }
}
function getProjectList() {
    return app.service('projects').find()
}