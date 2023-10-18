import React from 'react'
import {useState,useEffect}  from 'react';
import axios  from 'axios'
import Regulation_Table from './Regulation_Table.js';
function Regulations() {

  const [rules, setRules] = useState([]);
 
  const [States,setStates] = useState([]);


  async function getregulation(value){
    const response = await axios.get("http://localhost:4000/regulations/"+value);
    setRules(response.data);

    
  }

  async function getStates(){
    const response = await axios.get("http://localhost:4000/states");
     setStates(response.data);
  }


  useEffect( ()=>{
     getStates();
     console.log(States);
  },[])

 

  return (
    <div className='Regulations'>
      Regulations
      <label> Choose a state</label>
      <select className='menuforstates' onChange={(e)=>{getregulation(e.target.value)}}>
        {States.map((item)=>{
          return(
            <option value={item.state_id} >{item.state_id}</option>
          )
        })}
       
      </select>
      <Regulation_Table Regulations= {rules}/>
      
    </div>
  )
}

export default Regulations