import React from 'react'
import './Regulations.css'
import { useState } from 'react'
import PopupMenu from './PopupMenu';

function Regulation_nav_bar() {

  const [popupmenu,Setpopmenu] = useState(false);
  
  return (
    <div className='Regulation_nav_bar'>
        <a className='site-title'>Salt Water Rulez</a>
        <ul className='Regulation_ul'>
            <li>Profile</li>
            <li ><button onClick={()=>{Setpopmenu(!popupmenu)}}> Menu </button>
            {popupmenu && <PopupMenu/>}
            </li>
            
        </ul>
      
    </div>
  )
}




export default Regulation_nav_bar