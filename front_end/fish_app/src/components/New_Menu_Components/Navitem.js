import React from 'react'
import { useState } from 'react'

function Navitem(props) {

  const [open,Setopen] = useState(false);
  return (
    <div className='nav-item'>
      <li>
        <a onClick={()=>Setopen(!open)}> {props.name} </a>
        {open && props.children }
      </li>
    </div>
  )
}

export default Navitem