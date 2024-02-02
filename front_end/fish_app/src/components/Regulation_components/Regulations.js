import React from 'react'
import {useState,useEffect}  from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate.js';
import Regulation_Table from './Regulation_Table.js';
import State_selector from './State_selector.js';
import Nav_bar from '../inPageNavBar/Nav_bar.js'

function Regulations() {

  const axiosPrivate = useAxiosPrivate();

  const [rules, setRules] = useState([]);
 
  const [States,setStates] = useState([]);


  async function getregulation(value){
    const response = await axiosPrivate.get("/regulations/"+value);
    setRules(response.data);

    
  }

  async function getStates(){
    const response = await axiosPrivate.get("/regulations/states");
     setStates(response.data);
  }


  useEffect( ()=>{
     getStates();
     console.log(States);
  },[])

 

  return (
    <div className='Regulations'>
      <Nav_bar title="Salt Water Rulez" page="Log"/>

      <a className='page-title'>Regulation</a>
      <State_selector States ={States} getregulation ={getregulation} />
      <Regulation_Table Regulations= {rules}/>
      
    </div>
  )
}

export default Regulations