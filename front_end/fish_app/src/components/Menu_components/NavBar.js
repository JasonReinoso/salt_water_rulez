import React from 'react'
import { MenuItem } from './Menu_items'
import { Link } from 'react-router-dom'
import "./Navstyles.css"
function NavBar() {
  return (
    <nav className='nav'>
        <a className="site-title">Salt Water Rulez</a>
       
        <ul>

            {MenuItem.map((item,index)=>{
                return(
                    <li key={index}>
                    <Link to={item.path}>
                    {item.icon}
                        <span>{item.title}</span>
                        </Link>  
                    </li>


                )


            })} 
        </ul>
    </nav>
  )
}

export default NavBar