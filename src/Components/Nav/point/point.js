import classes from './point.module.css';

export const Point = ({src,name}) =>{
  return(
    <div className={classes.point}>
      <img src={src} alt="icon" width="37px"/>
      <div>{name}</div>
    </div>
  );
};