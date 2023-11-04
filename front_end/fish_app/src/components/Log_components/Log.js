import React from 'react'
import { useState } from 'react'
import CreateLogpopup from './CreateLog/CreateLogpopup';
import ViewLog from './ViewLog';

function Log() {
  const [popup,SetPopMenu] = useState(false);
  return (
    <div className='Log'>
      Log
      {popup && <CreateLogpopup SetPopMenu = {SetPopMenu} popup ={popup} />}
      <button onClick={()=>SetPopMenu(!popup)}>Create Log</button>
      <ViewLog/>
      </div>
  )
}

export default Log