import {takeEvery,put} from 'redux-saga/effects';
import { profileAPI } from '../API/API';
import { SET_MY_PROFILE_SAGA, SET_MY_PROFILE, ON_ADD_PHOTO,ON_ADD_PHOTO_SAGA, SET_STATUS, SET_STATUS_SAGA, GET_STATUS } from '../../redux/constants';



 
function* myProfileWorker({payload}) {
  const response = yield profileAPI.getProfile(payload);
  yield put({type: SET_MY_PROFILE_SAGA, payload: response.data});
}
export function* myProfileWatcher() {
  yield takeEvery(SET_MY_PROFILE, myProfileWorker);
}



function* myPhotoWorker({payload}){

  yield profileAPI.savePhoto(payload);
  yield put({type: ON_ADD_PHOTO_SAGA,});
  
}

export function* myPhotoWatcher(){
  yield takeEvery(ON_ADD_PHOTO, myPhotoWorker);
}




function* getStatusSagaWorker ({payload}){
  let response= yield profileAPI.getStatus(payload);
  yield put({type:SET_STATUS_SAGA, payload:response.data});

}
export function* getStatusSagaWatcher(){
  yield takeEvery(GET_STATUS, getStatusSagaWorker);
}


function* updateStatusSagaWorker({payload}){
  let response =yield profileAPI.updateStatus(payload.status);
  if(response.data.resultCode===0){
    yield put({type:GET_STATUS, payload:payload.userID});
  }

  
}

export function* updateStatusSagaWatcher(){
  yield takeEvery(SET_STATUS, updateStatusSagaWorker);
}