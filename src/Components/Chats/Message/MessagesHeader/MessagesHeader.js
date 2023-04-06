import classes from './MessagesHeader.module.css';
import Phone from '../../../../Pics/call.png';
import video from '../../../../Pics/video.png';
import vector from '../../../../Pics/Vector.png';

export const MessagesHeader = ({name,img}) =>{
  
  return(
    <div className={classes.MessagesHeader}>
      <div className={classes.Info}>
        <img src={img} alt="rr"/>
        <div className={classes.name}>{name}</div>
      </div>
      <div className={classes.buttons}>
        <button><img src={Phone} alt="phonePic"/></button>
        <button><img src={video} alt="videoPic"/></button>
        <button><img src={vector} alt="vectorPic"/></button>
      </div>
    </div>
  );
};