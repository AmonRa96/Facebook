import {  useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Friend } from './Friend/Friend';
import classes from './Friends.module.css';
import { useDispatch } from 'react-redux';
import { SET_USERS } from '../../redux/constants';

export const Friends = () =>{
  const users = useSelector((state)=>{
    return state.user.users;
  });
  const friends = users.filter((m)=>{
    return m.followed;
  });

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({type:SET_USERS});
   
  },[]);
  
  return(
    <div>
      <div className={classes.friendsCount}>Friends: {friends.length}</div>
      <div className={classes.Friends}>     
        <Friend/>
      </div>
    </div>
  );
};