import React from 'react'
import './Regulations.css'


function Regulation_nav_bar(props) {


  
  return (
    <div className='Regulation_nav_bar'>
      <ul className='navbar-nav'> 
        {props.children}
      </ul>
    </div>
  )
}




export default Regulation_nav_bar