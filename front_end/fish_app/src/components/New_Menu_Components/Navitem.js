/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Menu.css'
import { useState } from 'react'

function Navitem({name,setNavItems, navItems,navState,children}) {


  return (
    <div className='nav-item'>
      <li>
        <a 
        role="button"
        onClick={()=>{
          console.log(name);
          setNavItems((prevState)=>{
            const newstate ={...prevState};
            Object.keys(newstate).forEach(key=>{
              newstate[key] = false;
            })

            newstate[name] = !navState;
            return newstate;
          })
          // setNavItems(prevState=>({
          //   ...prevState,
          //   [name]:!navState
          // }))
        }}>  
          {name} 
          </a>
        {navState  && children }
      </li>
    </div>
  )
}

export default Navitem