import { userWatcher } from './userSaga';
import { fork } from 'redux-saga/effects';
import { followWatcher } from './followSaga';
import { unfollowWatcher } from './unfollowSaga';
import { myPhotoWatcher, myProfileWatcher,getStatusSagaWatcher,updateStatusSagaWatcher } from './myProfileSaga';
import { logoutWatcher,authWatcher, loginWatcher } from './loginLogoutSaga';



export default function* watcherAllSaga(){
  yield fork (userWatcher);
  yield fork (myProfileWatcher);
  yield fork (myPhotoWatcher);
  yield fork (getStatusSagaWatcher);
  yield fork (updateStatusSagaWatcher);
  yield fork (followWatcher);
  yield fork(unfollowWatcher);
  yield fork(logoutWatcher);
  yield fork(loginWatcher);
  yield fork(authWatcher);
  

}

export  function* rootSaga(){
  yield watcherAllSaga();
}