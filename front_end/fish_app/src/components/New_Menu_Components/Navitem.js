import React from 'react'
import { useState } from 'react'

function Navitem(props) {


  return (
    <div className='nav-item'>
      <li>
        <a 
        role="button"
        onClick={()=>{
          props.setOpen(!props.Open)
          props.setShouldBeClosed(false);
        }}
      
          > 
          {props.name} 
          </a>
        {props.Open  && props.children }
      </li>
    </div>
  )
}

export default Navitem