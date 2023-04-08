import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import profDef from '../../../Pics/profileDefault.png';
import { FOLLOW,UNFOLLOW } from '../../../redux/constants';
import classes from './User.module.css';
import { useSelector } from 'react-redux';


export const User = () =>{
  const dispatch = useDispatch();
  const users = useSelector((state)=>{ 
    return state.user.users;
  });

  return(   
    users.map(({name,img,followed,id,status})=><div className={classes.user}>
      <NavLink  to={'/profile/'+id} className={navData => navData.isActive? classes.active : classes.point}>
        <div className={classes.userName}>{name}</div>
      </NavLink>
      <div>{status}</div>
      <img src={img||profDef} alt="cc" width="150px" className={classes.userImg}/>
      {followed?<button className={classes.userButton} onClick={()=>dispatch({type:UNFOLLOW,payload:id})}>UNFOLLOW</button>:<button className={classes.userButton} onClick={()=>dispatch({type:FOLLOW,payload:id})}>FOLLOW</button>}
    </div>)
   
  );
};