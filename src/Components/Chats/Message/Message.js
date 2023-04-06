import classes from './Messages.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {  useParams} from 'react-router-dom';
import { onAdd } from '../../../redux/messagesReducer';
import { useState } from 'react';
import { MessagesHeader } from './MessagesHeader/MessagesHeader';
import { MessageFooter } from './MessageFooter/MessageFooter';


export const Message = () =>{
  const[value,setValue] = useState('');
  const { name='Jeff' } = useParams();
  const { img } = useParams();

  let Messages = useSelector((state)=>{
    return state.messages[name].messages;
  });
  let Img =useSelector((state)=>{
    return state.messages[name].img;
  });
  let writerName = useSelector((state)=>{
    return state.messages[name].name;
  });
  
  let dispatch = useDispatch();

  const handleButtonClick = () =>{
    dispatch(onAdd(value,name));
    setValue('');
  };

  return  (
    <div className={classes.Messages}>
      <MessagesHeader name={writerName} img={Img} />
      {Messages.map(({message,id,img})=>(
        <div key={Math.random()} className={id ===1?classes.MessagesItemMe: classes.MessagesItemYou}>     
          <img src={img} alt="gg" height="50px" width="50px"/>
          <div>{message}</div>        
        </div>)
      )}    
      <MessageFooter value={value} setValue={setValue} handleButtonClick={handleButtonClick}/> 
    </div>
  ); 
};