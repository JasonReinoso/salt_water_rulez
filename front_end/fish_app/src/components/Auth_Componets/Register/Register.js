import React,{useEffect, useState, useRef} from 'react'
import Nav_bar from '../../New_Menu_Components/Nav_bar'
import Navitem from '../../New_Menu_Components/Navitem'
import Inputfields from './Inputfields';
import axios from 'axios';
import './Register.css'


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Register() {

  const [success,setSuccues] = useState('');
  const [errmsg, setErrMsg] = useState('');

  const [Name,SetName] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus,setUserFocus] = useState(false);

  const [Email,SetEmail] = useState('');
  

  const [Password,SetPassword] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus,setPwdFocus] = useState(false);

  const [ConfirmPassword,SetConfirmPassword] = useState('');
  const [validConfirmPwd, setValidConfirmPwd] = useState(false);
  const [confirmFocus, setConfirmFocus] = useState(false);

   const userref = useRef(null);
 // const errRef = useRef();

  useEffect(()=>{
   //  userref.current.focus();
  },[])

  useEffect(()=>{
    const result = USER_REGEX.test(Name);
    console.log(result);
    console.log(Name);
    setValidName(result);
  },[Name])

  useEffect(()=>{
    const result = PWD_REGEX.test(Password);
    console.log(result);
    console.log(Password);
    setValidPwd(result);
    const match = Password == ConfirmPassword;
    setValidConfirmPwd(match);

  },[Password,ConfirmPassword])

  useEffect(()=>{
    setErrMsg(" ");
  },[Name,Password,ConfirmPassword])


  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(!USER_REGEX.test(Name) || !PWD_REGEX.test(Password))
    {
      setErrMsg("Invalid");
      return;
    }

    try{
      await axios.post("localhost:4000/register",
      JSON.stringify({Name,Email,Password}),
      {
        headers:{'Content-Type':'application/json'},
        withCredentials:true
      });
      setSuccues(true);
    }
    catch(err){
        if (!err?.response)
          setErrMsg('No Sever Response')
        else if(err.response?.status ===409)
          setErrMsg('Username Taken')
        else
          setErrMsg("Registration failed")
    }
    
  }

  return (

    
    <div className='Register'>
        <Nav_bar>
            <a className='title'>Salt Water Rulez</a>
            <Navitem>

            </Navitem>
        </Nav_bar>


        <>
          {success?
          (
            <section>
              <h1>Success</h1>
            </section>
          ):
          (
            <div className='Container'>

              <div className='Register_Form'>
                <form onSubmit={handleSubmit}>
                  <label className='Register_title'>Register Form</label>


                  <label htmlFor='username'>
                    Username:
                    <span className={validName? "valid":"hide"}>
                      check
                    </span>
                    <span className={validName || !Name ? "hide" : "invalid"}>
                      bad
                    </span>
                  </label>
                  
                  <input
                    type='text'
                    id ='username'
                    ref={userref}
                    autoComplete='off'
                    onChange={(e)=>SetName(e.target.value)}
                    required
                    aria-invalid = {validName ? "false": "true"}
                    aria-describedby='uidnote'
                    onFocus={() => setUserFocus(true)}
                    onBlur={()=>setUserFocus(false)}
                  />
                  <p id="uidnote" className={userFocus && Name && !validName ? "insturctions" : "offscreen"}>
                    4 to 24 charcters. <br/>
                    Must begin with a letter. <br />
                    Letters, NUMBERS, underscores, hyphens allowed.
                  </p>

                  <Inputfields 
                    className='Email' 
                    typeofinput='text' 
                    setter={SetEmail}
                  />
                  <label htmlFor='Password'>
                    Password: 
                    <span className={validPwd? "valid" : "hide"}>
                      check
                    </span>
                    <span className={validPwd || !Password? "hide" : "invalid"}>
                      fail
                    </span>
                  </label>

                  <input
                    type='Password'
                    id="Password"
                    onChange={(e)=>SetPassword(e.target.value)}
                    required
                    aria-invalid={validPwd?"false":"true"}
                    aria-describedby='pwdnote'
                    onFocus={()=>setPwdFocus(true)}
                    onBlur={()=>setPwdFocus(false)}
                  />
                  <p id ="pwdnote" className={pwdFocus && Password && !validPwd ? "insturctions": "offscreen"}>
                    8 to 24 charcters. <br/>
                    Must include uppercase and lowercase letters, a number and a special character. <br />
                    Allowed special characters: <span aria-label='exclamation mark'>!</span>
                    <span aria-label="at symbol">@</span> <span aria-label='hashtag'>#</span>
                    <span aria-label='dollar sign'>$</span> <span aria-label="percent">%</span>
                  </p>


                  <label htmlFor='Confirm_Password'>
                    Confirm Password: 
                    <span className={validConfirmPwd && ConfirmPassword ? "valid" : "hide"}>
                      check
                    </span>
                    <span className={validConfirmPwd || !ConfirmPassword? "hide" : "invalid"}>
                      fail
                    </span>
                  </label>

                  <input
                    type='Password'
                    id="Confirm_Password"
                    onChange={(e)=>SetConfirmPassword(e.target.value)}
                    required
                    aria-invalid={validConfirmPwd?"false":"true"}
                    aria-describedby='confirm_pwdnote'
                    onFocus={()=>setConfirmFocus(true)}
                    onBlur={()=>setConfirmFocus(false)}
                  />

                  <p id ="confirm_pwdnote" className={confirmFocus && ConfirmPassword && !validConfirmPwd ? "insturctions": "offscreen"}>
                    8 to 24 charcters. <br/>
                    Must include uppercase and lowercase letters, a number and a special character. <br />
                    Allowed special characters: <span aria-label='exclamation mark'>!</span>
                    <span aria-label="at symbol">@</span> <span aria-label='hashtag'>#</span>
                    <span aria-label='dollar sign'>$</span> <span aria-label="percent">%</span>
                  </p>

                  <button disabled={!validName || !validPwd || !validConfirmPwd}>Register</button>
                </form>
              </div>

            </div>
          )}
        </>
        
    </div>
  )
}

export default Register