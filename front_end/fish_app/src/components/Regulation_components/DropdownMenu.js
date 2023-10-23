import React from 'react'

function DropdownMenu() {
    function DropdownItem(props)
    {
        return(
            <a className='menu-item'>{props.children}</a>
        )
    }
  return (
    <div className='dropdown'>
        <div className='menu'>
            <DropdownItem>Logs</DropdownItem>
            <DropdownItem>Home</DropdownItem>
        </div>
        
    </div>
  )
}

export default DropdownMenu