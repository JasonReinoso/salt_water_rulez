import React from 'react'
import './Regulations.css'
import { useState } from 'react'
import PopupMenu from './PopupMenu';

function Regulation_nav_bar(props) {

  const [popupmenu,Setpopmenu] = useState(false);
  
  return (
    <div className='Regulation_nav_bar'>
      <ul className='navbar-nav'> 
        {props.children}
      </ul>
    </div>
  )
}




export default Regulation_nav_bar