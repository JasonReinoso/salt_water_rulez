import axios from "../api/axios.js";
import useAuth from "./useAuth";

const useLogOut = () =>{
    const {setAuth} = useAuth();
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
    return logout;
}
export default useLogOut