import axios from "../api/axios.js";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const useLogOut = () =>{
    const {setAuth} = useAuth();
    const navigate = useNavigate();
    const logout = async () =>{
        setAuth({});
        try{
            const response = await axios.delete('http://localhost:4000/logout',{
                withCredentials:true
            });
        }
        catch(err){
            console.error(err);
        }
    }
    navigate('/Login');
    return logout;
}


export default useLogOut