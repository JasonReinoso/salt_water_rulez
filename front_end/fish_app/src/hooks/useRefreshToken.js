import React from 'react'
import axios from 'axios'
import useAuth from './useAuth'

const useRefreshToken = () =>{
  const {setAuth} = useAuth();
  const refresh = async () =>{
    const response = await axios.get('http://localhost:4000/refresh',{
      withCredentials:true
    });
    setAuth(prev =>{
      
      return{...prev,accessToken:response.data.accessToken}
      
    });
    return response.data.accessToken;
  }
  return refresh;
}
export default useRefreshToken