import { useEffect} from 'react';
import { User } from './User/User';
import classes from './FIndFriends.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT_PAGE,DECREMENT_PAGE, SET_USERS } from '../../redux/constants';


export const FindFriends = () => {
  let curPage = useSelector((state)=>{
    return state.user.currentPage;
  });
  const users = useSelector((state)=>{ 
    return state.user.users;
  });
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({type:SET_USERS,payload:curPage});
   
   
  },[curPage]);
  let user = users.map((u)=><User  key={u.id} id={u.id} status={u.status} followed={u.followed} name={u.name}  img={u.photos.large}/>);
  return (
    <div className={classes.users}>
      {user}
      <div>
        {curPage===1?null:<button onClick={()=>dispatch({type:DECREMENT_PAGE,payload:curPage-1 })}>Prev</button>}
        <button onClick={()=>dispatch({type:INCREMENT_PAGE,payload:curPage+1})}>Next</button>
      </div>
    </div>
  );
};











