
import { SET_USER_DATA,SET_LOGIN_SAGA,SET_LOGOUT_SAGA, SET_ERROR, SET_CAPTCHA, SET_CAPTCHA_URL } from './constants';

export const initialApp = {
  id: null,
  email: null,
  login: null,
  isAuth: true,
  captcha:false,
  captchaUrl:null,
  errors: null,
  rememberMe:false

  
 
};


export const appReducer = (state = initialApp,{type,payload}) =>{

  console.log(payload,'paupupupup')
  switch(type){  
  case SET_USER_DATA:
    return{
      ...state,
      id:payload.id, 
      email:payload.values.email,
      login:payload.values.login ,  
      isAuth:payload.payload,
    };
  case SET_LOGIN_SAGA:
    return{
      ...state,
     
      email:payload.values.email,
      login:payload.values.login ,
      rememberMe:true,
      isAuth:true  
    };
  case SET_LOGOUT_SAGA:
    return{
      ...state,        
      isAuth:false  
    };
  case SET_ERROR:
    return{
      ...state,
      errors:payload
    };
  case SET_CAPTCHA:
    return{
      ...state,
      captcha:payload
    }; 
  case SET_CAPTCHA_URL:
    return{
      ...state,
      captchaUrl:payload
    }; 
  default: return state;
  };
};
 
