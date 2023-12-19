import { useContext } from "react";
import AuthContext from "../components/Auth_Componets/Auth_State/AuthProvider";

const useAuth = () =>{
    return useContext(AuthContext);
}

export default useAuth;