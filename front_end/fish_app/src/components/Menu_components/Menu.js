import React from "react";

import {MenuItem} from './Menu_items.js'

import {Link} from 'react-router-dom';

export function menu()
{
   return(
<ul>

{MenuItem.map((item,index)=>{
    return(
        <li key={index}>
          {/* <Link to={item.path}> */}
           {item.icon}
            <span>{item.title}</span>
            {/* </Link>   */}
        </li>


    )


})} 
</ul>
   )

}

export default menu