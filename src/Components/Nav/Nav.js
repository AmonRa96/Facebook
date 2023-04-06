import Logo from '../../Pics/LogoMessenger.png';
import classes from './Nav.module.css';
import { Point } from './point/point';
import ProfileLogo from '../../Pics/archivebox.png';
import ChatsLogo from '../../Pics/messages3.png';
import Friends from '../../Pics/people.png';
import LogOut from '../../Pics/logoutcurve.png';
import FindFriends from '../../Pics/download.png';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SET_LOGOUT } from '../../redux/constants';


export const Nav = ()=>{
  const profData = useSelector((state)=>{
    return state.profile.profile;
  });
  const auth = useSelector((state)=>{
    return state.app.isAuth;
  })
  const dispatch = useDispatch();
  const handleLogout =() =>{
    dispatch({type:SET_LOGOUT, payload:false})
  }
  return (
    <nav className={classes.nav}>
      <div>
        <img src={Logo} alt="logo" width={'60px'}/>
        <div className={classes.menuList}>
          <NavLink to="/profile/27183" className={navData => navData.isActive? classes.active : classes.point}>
            <Point name="Profile" src={ProfileLogo} />
          </NavLink>
          <NavLink to="/messages" className={navData => navData.isActive? classes.active : classes.point}> 
            <Point name="Chats"  src={ChatsLogo}/>
          </NavLink>
          <NavLink to="/friends" className={navData => navData.isActive? classes.active : classes.point}>
            <Point name="Friends" src={Friends}/>
          </NavLink>
          <NavLink to="/users" className={navData => navData.isActive? classes.active : classes.point}>
            <Point name="Find Friends" src={FindFriends}/>
          </NavLink>
        </div>
      </div>
      <NavLink to="/login" className={navData => navData.isActive? classes.active : classes.point}>
      </NavLink>
      {auth? <button onClick={handleLogout} className={classes.logOut}>
          <img src ={profData?.photos?.small} className={classes.profIcon} alt="profPic"/>
          <img src={LogOut}  alt="logout"/>
        </button>:null}
       
    
    </nav>
  );
};