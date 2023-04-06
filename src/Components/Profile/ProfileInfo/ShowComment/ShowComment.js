import classes from './ShowComment.module.css';
import { Comment } from './Comment/Comment';

export const ShowComment =({id,value,setValue,onHandleComment,comments}) =>{
  return(
    <div >
      <div className={classes.comment}>
        <Comment id={id} comments={comments}/>
      </div>
      <div className={classes.commentFooter}><input className={classes.commentInput} type="text"  placeholder="Type your comment..." value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button className={classes.buttonComment} onClick={onHandleComment}>Send</button></div>
    </div>
  );
};