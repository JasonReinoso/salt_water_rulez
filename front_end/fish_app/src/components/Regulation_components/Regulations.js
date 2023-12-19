import React from 'react'
import {useState,useEffect}  from 'react';
import axios  from 'axios'
import useAxiosPrivate from '../../hooks/useAxiosPrivate.js';
import Regulation_Table from './Regulation_Table.js';
import State_selector from './State_selector.js';
import Regulation_nav_bar from './Regulation_nav_bar.js';
import Navitem from './Navitem.js';
import DropdownMenu from './DropdownMenu.js';
import DropdownMenuProfile from './DropdownMenuProfile.js';
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
      <Regulation_nav_bar>

        <a className='title'>Salt Water Rulez</a>
        <Navitem name ="Profile"> 
          <DropdownMenuProfile/>
        </Navitem>
        <Navitem name ="Menu">
          <DropdownMenu/>
        </Navitem>

      </Regulation_nav_bar>

      
      <a className='page-title'>Regulation</a>
      <State_selector States ={States} getregulation ={getregulation} />
      <Regulation_Table Regulations= {rules}/>
      
    </div>
  )
}

export default Regulations