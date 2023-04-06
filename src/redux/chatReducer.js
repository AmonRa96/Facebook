import Jeff from '../Pics/JeffBezos.png';
import Elon from '../Pics/ElonMusk.png';
import Tesla from '../Pics/Tesla.png';
import SpaceX from '../Pics/SpaceX.png';
import Brus from '../Pics/BruceLee.png'




export const chatReducer = (state={initialChat},action) =>{

  return state;
};



export const initialChat = {
  people: [{
    id: 1,
    name: 'Jeff Bezos',
    message: 'Good idea! I like this',
    img: Jeff,
    key: 'Jeff'
  },
  {
    id: 2,
    name: 'Elon Mask',
    message: 'I hate u!!!! you stole my money!',
    img: Elon,
    key: 'Elon'
  },
  {
    id: 3,
    name: 'Tesla',
    message: 'This is so good man.',
    img: Tesla,
    key: 'Tesla'
  },
  {
    id: 4,
    name: 'Space x',
    message: 'How to make this &*^it?',
    img: SpaceX,
    key: 'SpaceX'
  },
  {
    id: 5,
    name: 'Brus Lee',
    message: 'You: I like you',
    img: Brus,
    key: 'Brus'
  },
  ]

};