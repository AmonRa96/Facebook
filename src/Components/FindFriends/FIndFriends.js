import { useEffect} from 'react';
import { User } from './User/User';
import classes from './FIndFriends.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT_PAGE,DECREMENT_PAGE, SET_USERS } from '../../redux/constants';


export const FindFriends = () => {
  const curPage = useSelector((state)=>{
    return state.user.currentPage;
  });  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type:SET_USERS,payload:curPage});   
  },[curPage]);
 
  return (
    <div className={classes.users}>
      <User/>
      <div>
        {curPage===1?null:<button onClick={()=>dispatch({type:DECREMENT_PAGE,payload:curPage-1 })}>Prev</button>}
        <button onClick={()=>dispatch({type:INCREMENT_PAGE,payload:curPage+1})}>Next</button>
      </div>
    </div>
  );
};











