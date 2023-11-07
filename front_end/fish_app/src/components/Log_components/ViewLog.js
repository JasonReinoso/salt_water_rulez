import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Fish_report from './Fish_report';

import './Log.css'
function ViewLog() {
  const [fishlogs, Setfishlogs] = useState([]);

  const [test,settest] = useState([]);
  
 
  async function getlogs()
  {
    const response = await axios.get("http://localhost:4000/Getlogs");
    Setfishlogs(response.data) 
  }
  
  async function test1()
  {
    const response = await axios.get("http://localhost:4000/picture")
    settest(response.data);
    console.log(test);
  }

  useEffect(()=>{
    getlogs();
  },[])

  useEffect(()=>{
    test1();
  })

  return (
    <div className='ViewLog'>
     
      <img src="http://localhost:4000/picture"></img>
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