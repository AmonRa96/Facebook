import {takeLatest,put} from 'redux-saga/effects';
import { usersAPI } from '../API/API';
import { SET_USERS_SAGA, SET_USERS } from '../../redux/constants';



 
export function* userWorker({payload}) {
  const response = yield usersAPI.getUsers(payload);
  yield put({type: SET_USERS_SAGA, payload: response.data.items});
}

export function* userWatcher() {
 
  yield takeLatest(SET_USERS, userWorker);
}


