import { takeLatest, call, put } from 'redux-saga/effects';
import io from 'socket.io-client/dist/socket.io';
import feathers from '@feathersjs/client';
import {POSTNEWPROJECT_REQUEST} from "../actions/postNewProject-action"

const socket = io('http://127.0.0.1:3030');

export const app = feathers();
  app.configure(feathers.socketio(socket));
  app.configure(feathers.authentication({
  storage: localStorage,
}));

export function* postNewProjectWatcherSaga() {
    // console.log("post Project watcherSaga")
    yield takeLatest(POSTNEWPROJECT_REQUEST , postNewProjectWorkerSaga);
  }

function* postNewProjectWorkerSaga(obj) {
    // console.log(" post project startWorker")
  try {
    const response = yield call(postNewProject, obj.payload);
    // console.log("post workerSaga",response)
    const data = response.data;
    yield put({ type: "POSTNEWPROJECT_SUCCESS", payload: data });
  } catch (error) { console.log("error")
    yield put({ type: "POSTNEWPROJECT_FAILURE", payload: error });
  }
}
function postNewProject(obj) {
  // console.log("HEELLLOO")
    return app.service('projects').create({
      type : obj.type,
      client : obj.client,
      location : obj.location,
      dev : obj.dev,
      TJM : obj.TJM,
      start_date : obj.start_date,
      end_date : obj.end_date,
      comment : obj.comment,
      days_done : obj.done
    }
    )
}