import but1 from '../../../../Pics/but1.png';
import but2 from '../../../../Pics/but2.png';
import but3 from '../../../../Pics/but3.png';
import but4 from '../../../../Pics/but4.png';
import classes from './MessageFooter.module.css';

export const MessageFooter = ({value,setValue,handleButtonClick}) =>{
  return(      
    <div className={classes.footerChat}>          
      <button><img src={but1} alt="but"/></button>
      <button><img src={but2} alt="but"/></button>
      <button><img src={but3} alt="but"/></button>
      <button><img src={but4} alt="but"/></button>                
      <input className={classes.messageInput} placeholder="Message" value={value} onChange={(e)=>{setValue(e.target.value);}} />       
      <button className={classes.buttonSend} onClick={handleButtonClick}>Send</button>
    </div>
  );
};









