import React, {useState} from 'react'
import Navitem from './Navitem'
import './Menu.css'
import DropdownMenuProfile from './DropdownMenuProfile'
import DropdownMenu from './DropDownMenu'

function Nav_bar(props) {

  const [navItems, setNavItems] = useState({
    Profile:false,
    Menu:false
  })


  return (
    <div className='nav_bar'>
      <a className='title'>{props.title}</a>
      <ul className='navbar-nav'>
        {
          Object.entries(navItems).map(([Item,navState])=>{
            return(
              <Navitem 
              name={Item}
              setNavItems={setNavItems}
              navItems={navItems}
              navState={navState}>

                {Item ==="Menu"? <DropdownMenu/> :<DropdownMenuProfile/> }
                
              </Navitem>
          )})
        }
        {/* <navItems>
          {props.children}
          </navItems> 
         */}
      </ul>
    </div>
  )
}




export default Nav_bar