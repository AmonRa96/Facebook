import React, { useEffect, useState } from 'react';
 import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import {SET_LOGIN} from '../../redux/constants';
import classes from './Login.module.css';
import { useSelector } from 'react-redux';
 
export const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(state=>state.app.errors);
  const captcha = useSelector(state=>state.app.captcha);
  const captchaUrl = useSelector(state=>state.app.captchaUrl);

  const[value,setValue] = useState('');


  return (
    <div className={classes.login}>
      <h1 className={classes.loginName}>Please login!!!</h1>
      <Formik 
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = <div>Invalid email address</div>;
          }
          return errors;
        }}
        onSubmit={(values) => {  
          dispatch({type: SET_LOGIN, payload:{values,value}});
          
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input className={classes.loginInput}
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input className={classes.loginInput}
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button className={classes.loginButton} type="submit">
              Submit
            </button>
            {error?<div className={classes.error}>{error}</div>:null}
            
            {captcha?<div className={classes.captcha}>
              <img className={classes.captchaIMG} src={captchaUrl} alt="capt"/>
              <input className={classes.captchaInput} placeholder="Type here....." value={values.value} onChange={(e)=>{setValue(e.target.value)}}/>
            </div>:null}
          </form>
        )}
      </Formik>
    </div>
  ); 
};
 
