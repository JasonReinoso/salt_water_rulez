import React from 'react'
import {useState,useEffect}  from 'react';
import axios  from 'axios'
function Regulations() {

  const [rules, setRules] = useState([]);

  useEffect(()=>{
   
    console.log("hi");
  },[])

  async function getStates(){
    const response = await axios.get("http://localhost:4000/states");
    const result = response.data;
    console.log(result);
  }

  return (
    <div className='Regulations'>
      Regulations
      <label> Choose a state</label>
      <select className='menuforstates'>
        <option value="state">ny</option>
        <option value="state">ny</option>
        <option value="state">ny</option>
      </select>
      <button onClick={getStates}></button>
    </div>
  )
}

export default Regulations