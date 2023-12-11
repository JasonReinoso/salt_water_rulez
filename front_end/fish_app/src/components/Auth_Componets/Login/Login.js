import React from 'react'
import { Link } from 'react-router-dom';
import { useRef,useState,useEffect,useContext } from 'react'
import axios from 'axios';
import AuthContext from '../Auth_State/AuthProvider';

function Login() {
    const userRef = useRef();
    const errRef = useRef();

    const {setAuth} = useContext(AuthContext);
    const [user,setUser] = useState('');
    const [Password,SetPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success,setSuccues] = useState('');

    useEffect(()=>{
      userRef.current.focus();
    },[])

    useEffect(()=>{
      setErrMsg('');
    },[user,Password])

    const handleSubmit = async (e)=>{
      e.preventDefault();
      try{
        const response = await axios.post("http://localhost:4000/Login",JSON.stringify({user,Password}),
        {
          headers:{
            'Accept': 'application/json',
            'Content-Type':'application/json'
          },
          withCredentials:true,
        });
        const accessToken =response?.data?.accessToken;
        // const roles = response?.data.roles;
        setAuth({user,Password,accessToken}); // add roles later  XD
        setUser('');
        SetPassword('');
        setSuccues('');
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

  return (
    <>
      {success?
        (
          <h1> needs to be edited</h1>
        ):
        (
          <section>
            <p ref={errRef} className={errMsg ? "errmesg": "offscreen"} aria-live ="assertive"></p>
            <h1> Sign In</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor='username'>Username:</label>
              <input 
                  type="text" 
                  id="username" 
                  ref={userRef} 
                  autoComplete='off'
                  onChange={(e)=>setUser(e.target.value)}
                  value={user}
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
            </form>
            <p>
              Need an Account?<br/>
              <Link 
                  to="/Register">
                  Sign up
                </Link>
            </p>
          </section>
        )
      }
    </>
   
  )
}

export default Login