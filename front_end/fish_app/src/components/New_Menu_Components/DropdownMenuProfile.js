import React from 'react'

function DropdownMenuProfile() {
    function DropdownItem(props)
    {
        return(
            <a className='menu-item'>{props.children}</a>
        )
    }
  return (
    <div className='dropdown'>
        <div className='menu'>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Sign Out</DropdownItem>
        </div>
        
    </div>
  )
}

export default DropdownMenuProfile