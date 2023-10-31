import React from 'react'
import { useState } from 'react'
import CreateLogpopup from './CreateLog/CreateLogpopup';
function Log() {
  const [popup,SetPopMenu] = useState(false);
  return (
    <div className='Log'>
      Log
      {popup && <CreateLogpopup SetPopMenu = {SetPopMenu} popup ={popup} />}
      <button onClick={()=>SetPopMenu(!popup)}>Create Log</button>
      
      </div>
  )
}

export default Log