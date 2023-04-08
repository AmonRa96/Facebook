import {takeEvery,put} from 'redux-saga/effects';
import { loginAPI } from '../API/API';
import {   SET_LOGOUT,SET_USER_DATA,AUTH,SET_LOGIN,SET_LOGIN_SAGA,SET_LOGOUT_SAGA, SET_ERROR, SET_CAPTCHA, SET_CAPTCHA_URL } from '../../redux/constants';




function* authWorker({payload}){
  const response =  yield loginAPI.me();
  if(response.data.resultCode===0){
    let {id,email,login} = response.data.data;
    yield put({type:SET_USER_DATA,payload:{id,email,login,payload}});
  }
};

export function* authWatcher(){
  yield takeEvery(AUTH,authWorker);
}


function* loginWorker({payload}) {
  const response = yield loginAPI.login(payload.values.email,payload.values.password,true,payload.value); 
  if(response.data.resultCode===0){
    yield put({type:SET_LOGIN_SAGA,payload:payload});
  } else{
    let error = response.data.messages[0];
    yield put({type:SET_ERROR,payload:error});
    if(response.data.resultCode ===10){
      const response = yield loginAPI.captcha();
      yield put({type:SET_CAPTCHA,payload:true});
      yield put({type:SET_CAPTCHA_URL,payload:response.data.url});
      
    }
  }
}
export function* loginWatcher() {   
  yield takeEvery(SET_LOGIN, loginWorker);
}
  
 
function* logoutWorker({payload}) {
  yield loginAPI.logout(); 
  yield put({type:SET_LOGOUT_SAGA,payload:payload});   
}
  
export function* logoutWatcher() {
   
  yield takeEvery(SET_LOGOUT, logoutWorker);
}
  
  
  