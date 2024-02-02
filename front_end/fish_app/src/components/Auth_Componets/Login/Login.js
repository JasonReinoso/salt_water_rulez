import React from 'react'
import { useRef,useState,useEffect} from 'react'
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import Testjwttoken from '../../tests/Testjwttoken';
import './Login.css'
import {Link,useNavigate,useLocation} from 'react-router-dom';
function Login() {
    const {setAuth,persist,setPersist} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();


    const [Username,setUser] = useState('');
    const [Password,SetPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
   

    useEffect(()=>{
      userRef.current.focus();
    },[])

    useEffect(()=>{
      setErrMsg('');
    },[Username,Password])

    const handleSubmit = async (e)=>{
      e.preventDefault();
      try{
        const response = await axios.post("http://localhost:4000/Login",
        JSON.stringify({Username,Password}),
        {
          headers:{
            'Accept': 'application/json',
            'Content-Type':'application/json'
          },
         // withCredentials:true,
        });
        const accessToken =response?.data?.accessToken;
        console.log(accessToken);
        // const roles = response?.data.roles;
        setAuth({Username,Password,accessToken}); // add roles later  XD
        setUser('');
        SetPassword('');
        navigate(from , {replace:true});
      }
      catch(err)
      {
        if(!err?.response)
        setErrMsg('No sever Response');
        else if(err.response?.status ===400)
          setErrMsg("Missing Username or Passowrd");
        else if (err.response?.status === 401)
          setErrMsg('Unauthorized');
        else
        setErrMsg('Login Failed');
      errRef.current.focus();
      }
    }

    const togglePersist = () =>{
      setPersist(prev => !prev);
    }

    useEffect(()=>{
      localStorage.setItem("persist", persist);
    },[persist])

  return (
    
          <section >
             <div className='titlo'>
              <label className='name'>Salt Water Rulez</label>
             </div>
              <p ref={errRef} className={errMsg ? "errmesg": "offscreen"} aria-live ="assertive"></p>
              <div className='container'>
                  <div className='SignInForm'>
                    <label className='signInTitle'>Sign In</label> 
                    <form onSubmit={handleSubmit}>
                    <label htmlFor='username'>Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        ref={userRef} 
                        autoComplete='off'
                        onChange={(e)=>setUser(e.target.value)}
                        value={Username}
                        required>
                    </input>

                        <label htmlFor='password'>Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        onChange={(e)=>SetPassword(e.target.value)}
                        value={Password}
                        required>
                        </input>
                    <button>Sign In</button>
                    <div className='persistCheck'>
                      <label htmlFor="persist">Trust This device</label>
                      <input 
                      type="checkbox"
                      id="persist"
                      onChange={togglePersist}
                      checked={persist}
                      />
                      
                    </div>
                  </form>
                  <p className='registerLink'>
                    Need an Account?<br/>
                    <Link 
                        to="/Register">
                        Sign up
                      </Link>

                  </p>
                  </div>
              </div>
              
          </section>
     
   
  )
}

export default Login