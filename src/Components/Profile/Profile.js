import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import profDefault from '../../Pics/profileDefault.png';
import classes from './Profile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { SET_MY_PROFILE,ON_ADD_PHOTO,SET_STATUS,GET_STATUS } from '../../redux/constants';


export const Profile = () =>{
  const statusData = useSelector(state=>state.profile.status);
  const[status, setStatus] = useState('');
  const[statusInput,setStatusInput] = useState(false);
  const{userID} = useParams();
  const dispatch = useDispatch();

  const onHandleChange = (e)=>{
    const file = e.target.files[0];
    dispatch({type:ON_ADD_PHOTO, payload:file});
  };
  const profData = useSelector((state)=>{
    return state.profile.profile;
  });
  const Infos = useSelector((state)=>{
    return state.profile.posts;
    
  });

  useEffect(()=>{     
    dispatch({type:SET_MY_PROFILE,payload: userID});
    dispatch({type:GET_STATUS,payload: userID});

   
  },[userID]);
  const mappedInfos = Infos.map(i=><ProfileInfo key={i.id} id={i.id} img={i.img}  posts={i.posts} likes={i.likesCount} comments = {i.comments}/>);
  const handleStatusSubmit = (e) =>{
    e.preventDefault();
    dispatch({type: SET_STATUS, payload:{status,userID}});
  };
  const handleStatusInput = ()=>{
    setStatusInput(current => !current);
  };

  return (
    <div className={classes.Profile}>
      <div className={classes.profINFO}>
        <div className={classes.profName}>{profData?.fullName}</div>
        <img  className={classes.profilePicture} src={profData?.photos?.large||profDefault} width="600px" alt="ff"/>      
        {userID==='27183' ? <input type="file" id="photo" onChange={onHandleChange}/>:null}
        <button onDoubleClick={handleStatusInput}>{statusData}</button >
        {statusInput? <div><input type="text" placeholder="Type your status here..." onChange={(e)=>setStatus(e.target.value)}/> <button onClick={handleStatusSubmit}>Save</button></div>:null}
       
      </div>
      <div>
        {userID==='27183' ?mappedInfos:null}
      </div>     
    </div>
      
     
   
  );
};