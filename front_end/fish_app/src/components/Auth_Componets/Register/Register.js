import React,{useState} from 'react'
import Nav_bar from '../../New_Menu_Components/Nav_bar'
import Navitem from '../../New_Menu_Components/Navitem'
import Inputfields from './Inputfields';
  import './Register.css'

function Register() {

  const [Name,SetName] = useState("");
  const [Email,SetEmail] = useState('');
  const [Password,SetPassword] = useState('');
  const [ConfirmPassword,SetConfirmPassword] = useState('');

  return (
    <div className='Register'>
        <Nav_bar>
            <a className='title'>Salt Water Rulez</a>
            <Navitem>

            </Navitem>
        </Nav_bar>
        <div className='Container'>
          <div className='Register_Form'>
          <label className='Register_title'>Register Form</label>
          <Inputfields className='Name' typeofinput='text' setter={SetName} ></Inputfields>
          <Inputfields className='Email' typeofinput='text' setter={SetEmail}></Inputfields>
          <Inputfields className='Password' typeofinput='password' setter={SetPassword}></Inputfields>
          <Inputfields className='Confirm_Password' typeofinput='ConfirmPassword' setter={SetConfirmPassword}></Inputfields>
          <button>Register</button>
          </div>
        </div>
        
    </div>
  )
}

export default Register