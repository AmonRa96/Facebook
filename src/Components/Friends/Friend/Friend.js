import { useDispatch } from 'react-redux';
import profDef from '../../../Pics/profileDefault.png';
import classes from './Friend.module.css';
import { UNFOLLOW } from '../../../redux/constants';
import { NavLink } from 'react-router-dom';

export const Friend = ({name,img,id}) =>{
  const dispatch = useDispatch(); 
  

  return (
    <NavLink  to={'/profile/'+id} className={navData => navData.isActive? classes.active : classes.point}>
      <div className={classes.friend}>     
        <img className={classes.friendImg} src={img||profDef} alt="propPic" width="150px"/>
        <div className={classes.friendName}>{name}</div>
        <button onClick={()=>dispatch({type:UNFOLLOW,payload:id})} className={classes.friendButton}>Remove</button>
      </div>
    </NavLink>
  );
};