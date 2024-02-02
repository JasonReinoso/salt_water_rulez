import React from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import useLogOut from '../../hooks/useLogout'
function DropdownMenuProfile() {
    const logOut = useLogOut();
    
    
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
            <a 
                onClick={logOut}
                className='menu-item'
                >Sign Out
            </a>
        </div>
        
    </div>
  )
}

export default DropdownMenuProfile