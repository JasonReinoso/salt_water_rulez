import React from 'react'
import { Link } from 'react-router-dom'
function DropdownMenu() {
    function DropdownItem(props)
    {
        return(
            <a className='menu-item'>
                
                {props.children}
            </a>
        )
    }
  return (
    <div className='dropdown'>
        <div className='menu'>
            <DropdownItem>
                <Link to="/Log" className='Link' >
                Logs
                </Link>
            </DropdownItem>
            <DropdownItem>
                <Link to="/" className='Link'>
                Home  
                </Link>
                
            </DropdownItem>

            
        </div>
        
    </div>
  )
}

export default DropdownMenu