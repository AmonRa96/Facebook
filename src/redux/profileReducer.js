import  cry from '../Pics/zenshinaplachet.jpg';
import avtoport from '../Pics/avtoportret.jpg';
import stariy from '../Pics/staryy-gitarist.jpg';
import chart from '../Pics/devochka-shar.jpg';
import { ON_COMMENT, SET_MY_PROFILE_SAGA,ON_ADD_PHOTO_SAGA, SET_STATUS_SAGA } from './constants';

export const initialProfile = { 
  posts :[
    {id:  Math.random(),posts:'Crying women',img:cry, likesCount:231,
      comments: [
        {id: Math.random(),writerName: 'Jack Nelson', comment:'COOL!!!!'},
        {id:  Math.random(),writerName: 'Miqayel Miqayelyan',comment:'Great!!!'}]
    },
    {id:  Math.random(),posts:'Van Gog',img:avtoport, likesCount:56,
      comments: [
        {id:  Math.random(),writerName: 'Mika Nelson', comment:'Fantastic!!!!'},
        {id:  Math.random(),writerName: 'Sasun Araqelyan',comment:'Nice!!!'}]
    },
    {id:  Math.random(),posts:'Old man',img:stariy, likesCount:55,
      comments: [
        {id:  Math.random(),writerName: 'Jenny Nelson', comment:'COOL!!!!'},
        {id: Math.random(),writerName: 'Ramon Simonyan',comment:'Great!!!'}]},
    {id:  Math.random(),posts:'Pretty girl',img:chart, likesCount:12,
      comments: [
        {id:  Math.random(),writerName: 'Karen Poghosyan', comment:'OMG!!!!'},
        {id:  Math.random(),writerName: 'Artur Samsonyan',comment:'What a great picture!!!'}]}],
  profile: [],
 
  status: ''
    
};

export const profileReducer = (state=initialProfile,{type,payload})=> {  
  switch(type){
  case SET_MY_PROFILE_SAGA:
    return { ...state, profile: payload};
  case ON_COMMENT:
    return {...state, 
      posts: state.posts.map((post)=>{
        if(post.id === payload.id){
          return {
            ...post,
            comments: [...post.comments, {
              id: Math.random(),
              writerName: 'Razmik Karapetyan',
              comment: payload.value
            }]
          };
        }
        return post;
      }) 
    };
  case ON_ADD_PHOTO_SAGA:
    return{...state,
      profile:{...state.profile,photos:payload} }; 
  case SET_STATUS_SAGA:
    return{...state,
      status: payload    
    };       
  default: return state;
  };          
};




