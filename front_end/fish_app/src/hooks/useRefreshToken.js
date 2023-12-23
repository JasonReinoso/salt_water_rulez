import React from 'react'
import axios from 'axios'
import useAuth from './useAuth'

const useRefreshToken = () =>{
  const {setAuth} = useAuth();
  const {auth} = useAuth();
  const refresh = async () =>{
    console.log("before refresh");
    const response = await axios.get('http://localhost:4000/refresh',{
      withCredentials:true
    });
    
    setAuth(prev =>{
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      console.log("after refresh");
      return{...prev,accessToken:response.data.accessToken}
      
    });
    console.log(auth);
    return response.data.accessToken;
  }
  return refresh;
}
export default useRefreshToken