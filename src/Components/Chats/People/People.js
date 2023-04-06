import classes from './People.module.css';
import videoBut from '../../../Pics/vidBut.png';
import otherBut from '../../../Pics/Vector.png';
import { PeopleItem } from './PeopleItem/PeopleItem';



export const People = () =>{  

  return (
    <div  className={classes.chat}>
      <div className={classes.People}>
        <div className={classes.peopleHeader}>
          <h2>People</h2>
          <button><img src={videoBut} alt="videoButton"/></button>
          <button><img src={otherBut} alt="otherButton"/></button>
        </div>
        <input className={classes.searchPeopleInput} type="text" placeholder="Search messenger..."/>
        <div><PeopleItem/></div>
      </div>     
    </div>
  );
};