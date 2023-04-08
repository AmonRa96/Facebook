import likeButton from '../../../Pics/likeButton.png';
import likeIcon from '../../../Pics/likeIcon.png';
import likedIcon from '../../../Pics/pnghut_youtube-like-button-finger-logo-gesture.png';
import commentButton from '../../../Pics/commentButton.png';
import classes from './ProfileInfo.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ON_COMMENT } from '../../../redux/constants';
import { ShowComment } from './ShowComment/ShowComment';


export const ProfileInfo = ({id,img,posts,likes,comments}) =>{
  const [likesCount, setLikesCount] = useState(likes);
  
  const[liked,setLike] = useState(false);
  const dispatch =useDispatch();
  const[showComment, setShowComment] = useState(false);

  
  const[value,setValue] = useState('');

  const onHandleLike = () =>{
    setLike(true);
    setLikesCount((state)=>state+1);
    
  };

  const onHandleDislike = () =>{
    setLike(false);
    setLikesCount((state)=>state-1);

  };

  const onHandleComment = (e) =>{
    dispatch({type: ON_COMMENT,payload: {value,id}});
    setValue('');
  };
  const handleCHange = ()=>{
    setShowComment(current=>!current);
  };
  
 

  return(
    <div className={classes.ProfileInfo}>
      <div className={classes.profPosts}>{posts}</div>
      <img className={classes.profImg} src={img} alt="icon" width="900px"/>
      <div className={classes.likeComCount}>
        <div><img src={likeIcon} alt="icon" width="30px"/> {likesCount}</div>
        <div> comments {comments.length}</div> 
      </div>
      <div className={classes.likeComChange}>
        { liked?           
          <button  onClick={onHandleDislike}><img src={likedIcon} alt="icon" width="30px" className={classes.dislikeButton}/><span className={classes.dislike}>like</span></button>:
          <button onClick={onHandleLike}><img src={likeButton} alt="icon" width="30px" className={classes.likeButton}/>like</button>}
        <button  onClick={handleCHange}><img src={commentButton} alt="icon" width="30px"/>comment</button>
      
      </div>
      <div className={classes.comments}>
        {showComment? <ShowComment id={id} value={value} setValue={setValue} comments={comments} onHandleComment={onHandleComment}/>:null}
      </div>
    </div>
  );
};