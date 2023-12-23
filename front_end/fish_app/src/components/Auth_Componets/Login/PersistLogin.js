import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import useRefreshToken from "../../../hooks/useRefreshToken"

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const {auth, persist} = useAuth();


    useEffect(  ()=>{
        let isMounted = true;
        console.log("persist login before it hits refresh");
        const verifyRefreshToken = async () =>{
            try{
                await refresh();
                console.log("testing refresh for persistlogin");
            }
            catch (err)
            {
                console.error(err);
            }
            finally{
                isMounted && setIsLoading(false);
            }
        }

        !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);
        return () => isMounted = false;
    },[])

    useEffect(()=>{
        console.log(`isLoading: ${isLoading}`)
        console.log(`aT:  ${JSON.stringify(auth?.accessToken)}`)
        console.log({auth});
    
    },[isLoading])

    return (
        <>

        {!persist
            ?<Outlet/>
            :isLoading
                ?<p>Loading...</p>
                :<Outlet />
        }
        </>
    )
}
export default PersistLogin