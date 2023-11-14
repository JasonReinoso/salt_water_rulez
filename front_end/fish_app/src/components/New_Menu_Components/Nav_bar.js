import React from 'react'
import './Menu.css'


function Nav_bar(props) {


  
  return (
    <div className='Regulation_nav_bar'>
      <ul className='navbar-nav'> 
        {props.children}
      </ul>
    </div>
  )
}




export default Nav_bar