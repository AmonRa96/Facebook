import { applyMiddleware, combineReducers, createStore } from 'redux';
import { chatReducer, initialChat } from './chatReducer';
import {initialMessage, messagesReducer } from './messagesReducer';
import createSagaMiddleware from 'redux-saga';
import { profileReducer,initialProfile } from './profileReducer';
import rootSaga from '../Components/saga/rootSaga';
import { userReducer, initialUser } from './userReducer';
import { appReducer, initialApp } from './appReducer';


const sagaMiddleware = createSagaMiddleware(); 
export const store = createStore(combineReducers({
  chat: chatReducer,
  messages: messagesReducer,
  profile: profileReducer,
  user: userReducer,
  app:appReducer

}),{
  chat: initialChat,
  messages: initialMessage,
  user: initialUser,
  profile:initialProfile,
  app: initialApp
},applyMiddleware(sagaMiddleware)

);

sagaMiddleware.run(rootSaga);
