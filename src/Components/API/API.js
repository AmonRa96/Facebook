import axios from 'axios';

export const instance= axios.create({
  withCredentials:true,
  baseURL:`https://social-network.samuraijs.com/api/1.0/`,
  headers:{
    'API-KEY' : 'd05ce0ec-eae0-425d-935e-009b0e88b606'
  }
});

export const profileAPI = {
  getProfile(userID=27183){
    return instance.get(`profile/${userID}`);
  } ,
  getStatus(userID){
    return instance.get(`profile/status/ `+userID);
  },
  updateStatus(status){
    return instance.put(`profile/status`,{status: status});
  },
  savePhoto(photoFile){
    const formData = new FormData();
    formData.append('image', photoFile);

    return instance.put(`profile/photo`,formData,{
      headers: {
        'Content-Type' : 'multipart/form-data'
      }
    });
  } 
};

export const usersAPI = {
  getUsers(currentPage=1,pageSize=30){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },
  follow(userID){
    return instance.post(`/follow/${userID}`); 
  },
  unfollow(userID){
    return instance.delete(`/follow/${userID}`); 
  }
};

export const loginAPI = {
  me(){
    return instance.get(`auth/me`);
  } ,
  login(email,password,rememberMe= false,captcha){
    return instance.post(`auth/login`,{email,password,rememberMe,captcha});
  } ,
  logout(){
    return instance.delete(`auth/login`);
  },
  captcha(){
    return instance.get('security/get-captcha-url');
  }
};