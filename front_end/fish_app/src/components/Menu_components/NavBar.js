import React from 'react'
import { MenuItem } from './Menu_items'
import { Link } from 'react-router-dom' 
import "./Navstyles.css"
import useAuth from '../../hooks/useAuth'
import { axiosPrivate } from '../../api/axios'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { useNavigate } from 'react-router-dom'
import useLogOut from '../../hooks/useLogout'
function NavBar() {

    // const {setAuth} = useAuth();
    // const axiosPrivate = useAxiosPrivate();
    const logout = useLogOut();
    const navigate = useNavigate();

    const signOut = async () =>{
        await logout();
        navigate('/Login');
        
    }
  
    
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
            <li className ="Logout"
              onClick={signOut}
            >
                <span
                >Logout</span>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar