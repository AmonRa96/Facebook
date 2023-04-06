import {takeEvery,put} from 'redux-saga/effects';
import { usersAPI } from '../API/API';
import {  UNFOLLOW, SET_USERS } from '../../redux/constants';



 
export function* unfollowWorker({payload}) {
  yield usersAPI.unfollow(payload);
  yield put({type: SET_USERS});

}

export function* unfollowWatcher() {
 
  yield takeEvery(UNFOLLOW, unfollowWorker);
}


