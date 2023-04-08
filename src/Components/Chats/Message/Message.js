import classes from './Messages.module.css';
import {  useSelector } from 'react-redux';
import {  useParams} from 'react-router-dom';
import { MessagesHeader } from './MessagesHeader/MessagesHeader';
import { MessageFooter } from './MessageFooter/MessageFooter';


export const Message = () =>{
  const { name='Jeff' } = useParams();

  const messages = useSelector((state)=>{
    return state.messages[name].messages;
  });
  const img =useSelector((state)=>{
    return state.messages[name].img;
  });
  const writerName = useSelector((state)=>{
    return state.messages[name].name;
  });  

  return  (
    <div className={classes.Messages}>
      <MessagesHeader name={writerName} img={img} />
      {messages.map(({message,id,img})=>(
        <div key={Math.random()} className={id ===1?classes.MessagesItemMe: classes.MessagesItemYou}>     
          <img src={img} alt="gg" height="50px" width="50px"/>
          <div>{message}</div>        
        </div>)
      )}    
      <MessageFooter name={name} /> 
    </div>
  ); 
};