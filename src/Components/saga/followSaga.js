import {takeEvery,put} from 'redux-saga/effects';
import { usersAPI } from '../API/API';
import {  FOLLOW, SET_USERS } from '../../redux/constants';



 
export function* followWorker({payload}) {

  yield usersAPI.follow(payload);

  yield put({type: SET_USERS});
 
}

export function* followWatcher() {
 
  yield takeEvery(FOLLOW, followWorker);
}


