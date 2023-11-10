import React, {useState, useEffect,useContext} from 'react'
import axios from 'axios';
import Fish_report from './Fish_report';


import './Log.css'
function ViewLog({fishlogs, Setfishlogs}) {


  async function getlogs()
  {
    const response = await axios.get("http://localhost:4000/Getlogs");
    Setfishlogs(response.data) 
  }
  
  

  useEffect(()=>{
    getlogs();
  },[])

 

  return (
    <div className='ViewLog'>
     
      
        {fishlogs.map((item)=>{
            return(
                <div className='Logs'> 
                    <Fish_report>
                        {item}

                    </Fish_report>
                </div>
            )
        })}
       
    </div>
  )
}

export default ViewLog