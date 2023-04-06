import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Chats } from './Components/Chats/Chats';
import { Nav } from './Components/Nav/Nav';
import { Profile } from './Components/Profile/Profile';
import { Friends } from './Components/Friends/Friends';
import { FindFriends } from './Components/FindFriends/FIndFriends';
import {Login} from './Components/Login/Login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH } from './redux/constants';

function App() {
  const isAuth = useSelector((store)=>{
    return store.app.isAuth;
  });

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({type: AUTH,payload:true});
  },[isAuth])
  return (
    <div className="App">
      <Nav/>
      {isAuth? <div className="route">
        <Routes>
          <Route path="/profile/:userID" element={<Profile/>}/> 
          <Route path="/messages" element={<Chats/>}/>
          <Route path="/friends" element={<Friends/>}/>
          <Route path="/users" element={<FindFriends/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/chat" element={<Chats/>}/>
          <Route path="/chat/:name" element={<Chats/>}/>        
        </Routes>
      </div>:<Login/>}
     
    </div>
  );
}

export default App;
