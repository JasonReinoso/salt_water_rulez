import React from 'react'
import {useNavigate} from 'react-router-dom'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import useAuth from '../../hooks/useAuth'

function DropdownMenuProfile() {
    function DropdownItem(props)
    {
        return(
             <a  onClick={props.onClick} className='menu-item'>{props.children}</a>
        ) 
    }
  return (
    <div className='dropdown'>
        <div className='menu'>
            <DropdownItem onClick={()=>console.log("bye")}>Settings</DropdownItem>
            <DropdownItem onClick={()=> console.log("hi")}>Sign Out</DropdownItem>
           
        </div>
        
    </div>
  )
}

export default DropdownMenuProfile