import React from 'react'
import { MenuItem } from './Menu_items'
import { Link } from 'react-router-dom' 
import "./Navstyles.css"
import useAuth from '../../hooks/useAuth'
import { axiosPrivate } from '../../api/axios'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { useNavigate } from 'react-router-dom'
function NavBar() {

    const {setAuth} = useAuth();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();

    const logout = async () =>{
        setAuth({});
        await axiosPrivate.delete('/logout');
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
              onClick={logout}
            >
                <span
                >Logout</span>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar