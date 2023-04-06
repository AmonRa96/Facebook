import { People } from './People/People';
import {Message} from './Message/Message';
import classes from './Chats.module.css';

export const Chats = () =>{
  return(
    <div className={classes.Chats}>
      <People/> 
      <Message/>    
    </div>
  );
};