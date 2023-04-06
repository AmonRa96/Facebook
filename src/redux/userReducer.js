
import { SET_USERS_SAGA,INCREMENT_PAGE,DECREMENT_PAGE } from './constants';

export const initialUser = {
  users: [],
  currentPage: 1,
  friends: []
  
 
};


export const userReducer = (state = initialUser,{type,payload}) =>{
  switch(type){
  case SET_USERS_SAGA:
    return { ...state, users: payload}; 
  case INCREMENT_PAGE:
    return {...state, currentPage: payload};  
  case DECREMENT_PAGE:
    return {...state, currentPage: payload}; 
  default: return state;
  };
};
 

