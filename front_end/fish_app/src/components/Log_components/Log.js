import React from 'react'
import { createContext, useState ,useContext } from 'react'
import CreateLogpopup from './CreateLog/CreateLogpopup';
import ViewLog from './ViewLog';

const SharedStateContext = createContext();

function Log() {

  const [popup,SetPopMenu] = useState(false);
  const [fishlogs,Setfishlogs] = useState([]);
  return (
    <SharedStateContext.Provider value={{fishlogs,Setfishlogs}}>  
      <div className='Log'>
        Log
        {popup && <CreateLogpopup SetPopMenu = {SetPopMenu} popup ={popup} />}
        <button onClick={()=>SetPopMenu(!popup)}>Create Log</button>
        <ViewLog/>
      </div>
    </SharedStateContext.Provider>   
  )
}

export default Log