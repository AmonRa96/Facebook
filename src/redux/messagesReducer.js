import Jeff from '../Pics/JeffBezos.png';
import Elon from '../Pics/ElonMusk.png';
import Tesla from '../Pics/Tesla.png';
import SpaceX from '../Pics/SpaceX.png';
import Brus from '../Pics/BruceLee.png';
import me from '../Pics/me.png';
import { ADD_MESSAGE } from './constants';



export const initialMessage = {
 
  Jeff:{
    name:'Jeff Bezzos',
    img: Jeff,
    messages: [{
      id: 1,           
      message: 'Hi, Mr Jeff',
      img: me
    },
    {
      id: 2,
      message: 'Hello',
      img: Jeff
    },
    {
      id: 1,     
      message: 'Hi, Mr. Jeff, I have one idea of business, can you view this? I really need this, this is a very good idea for every project',
      img: me
    },
    {
      id: 1,
      message: 'file of investors.txt',
      img: me
    },
    {
      id: 2,
      message: 'Good idea! i like this',
      img: Jeff
    },
    ]},
  Elon:{
    name:'Elon Mask',
    img: Elon,
    messages:[{
      id: 1,           
      message: 'Hi, Mr Elon',
      img: me
    },
    {
      id: 2,
      message: 'Hello',
      img: Elon
    },
    {
      id: 1,     
      message: ' I have one idea of business, can you view this? I really need this, this is a very good idea for every project',
      img: me
    },
    {
      id: 1,
      message: 'file of investors.txt',
      img: me
    },
    {
      id: 2,
      message: 'Good idea! i like this',
      img: Elon
    },
    ]},
  Tesla:{
    name:'Tesla',
    img: Tesla,
    messages:[{
      id: 1,           
      message: 'Hi, Mr Tesla',
      img: me
    },
    {
      id: 2,
      message: 'Hello',
      img: Tesla
    },
    {
      id: 1,     
      message: ' I have one idea of business, can you view this? I really need this, this is a very good idea for every project',
      img: me
    },
    {
      id: 2,
      message: 'file of investors.txt',
      img: Tesla
    },
    {
      id: 1,
      message: 'Good idea! i like this',
      img: me
    },
    ]},
  SpaceX:{
    name:'SpaceX',
    img: SpaceX,
    messages:[{
      id: 1,           
      message: 'Hi',
      img: me
    },
    {
      id: 2,
      message: 'Hello',
      img: SpaceX
    },
    {
      id: 1,     
      message: ' I have one idea of business, can you view this? I really need this, this is a very good idea for every project',
      img: me
    },
    {
      id: 2,
      message: 'file of investors.txt',
      img: SpaceX
    },
    {
      id: 1,
      message: 'Good idea! i like this',
      img: me
    },
    ]},
  Brus:{
    name:'Brus Lee',
    img: Brus,
    messages:[{
      id: 1,           
      message: 'Hi',
      img: me
    },
    {
      id: 2,
      message: 'Hello',
      img: Brus
    },
    {
      id: 1,     
      message: ' I have one idea of business, can you view this? I really need this, this is a very good idea for every project',
      img: me
    },
    {
      id: 2,
      message: 'file of investors.txt',
      img: Brus
    },
    {
      id:1,
      message: 'Good idea! i like this',
      img: me
    },
    ]},
};

export const messagesReducer = (state=initialMessage,{type,payload}) =>{
  if(type === ADD_MESSAGE){  
    const {name,message} =payload;
    const writerName = state[name];
    return{
      ...state,
      [name]:{
        ...writerName,
        messages:[...writerName.messages,{           
          id:1,
          message: message,
          img:me}]
      }
    };    
  };
  return state;
};


 


export const onAdd = (newMessage,name) =>{
  
  return({ 
    type: ADD_MESSAGE,
    payload:{ 
      name,                 
      message: newMessage         
    }});
    
   
};