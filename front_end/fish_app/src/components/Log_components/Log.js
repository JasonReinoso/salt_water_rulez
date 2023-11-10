import React from 'react'
import {  useState  } from 'react'
import CreateLogpopup from './CreateLog/CreateLogpopup';
import ViewLog from './ViewLog';



function Log() {

  const [popup,SetPopMenu] = useState(false);
  const [fishlogs,Setfishlogs] = useState([]);
  return (
     
      <div className='Log'>
        Log
        {popup && <CreateLogpopup SetPopMenu = {SetPopMenu} popup ={popup} Setfishlogs={Setfishlogs} />}
        <button onClick={()=>SetPopMenu(!popup)}>Create Log</button>
        <ViewLog fishlogs={fishlogs} Setfishlogs={Setfishlogs}/>
      </div>
    
  )
}

export default Log