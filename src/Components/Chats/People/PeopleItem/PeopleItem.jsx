import classes from './PeopleItem.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PeopleItem = () =>{
  const Peoples = useSelector((state)=>{
    return state.chat.people;
  });  

  return Peoples.map(({name,message,img,id,key})=>( <NavLink key={id} to={`/chat/${key}`} className={navData => navData.isActive? classes.active : classes.point}>
    <div className={classes.Items}>
      <div>
        <img src={img} alt="d"/>
      </div>
      <div className={classes.peopleInfo}>
        <div className={classes.peopleName}>{name}</div>
        <div className={classes.peopleMessage}>{message}</div>
      </div>
    </div>
  </NavLink>)      
  );
};