import { useDispatch } from 'react-redux';
import profDef from '../../../Pics/profileDefault.png';
import classes from './Friend.module.css';
import { UNFOLLOW } from '../../../redux/constants';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Friend = () =>{
  const dispatch = useDispatch();
  const users = useSelector((state)=>{
    return state.user.users;
  }); 
  const friends = users.filter((m)=>{
    return m.followed;
  });

  return (
    friends.map(({name,img,id})=>
      <div className={classes.friend}>     
        <img className={classes.friendImg} src={img||profDef} alt="propPic" width="150px"/>
        <NavLink  to={'/profile/'+id} className={navData => navData.isActive? classes.active : classes.point}>
          <div className={classes.friendName}>{name}</div>
        </NavLink>
        <button onClick={()=>dispatch({type:UNFOLLOW,payload:id})} className={classes.friendButton}>Remove</button>
      </div>
   
    )
  );
};