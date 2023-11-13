import React from 'react'
import './Log.css'
function ButtonToCreateLog({popup, SetPopMenu}) {
  return (
    <div className='ButtonToCreateLog'>
        <div>
            <img src='profile pic to be'></img>
            <label> What did you catch, [user name]? </label>  
        </div>
        <div>
            <button  className="butt" onClick={()=>SetPopMenu(!popup)}>Create Log</button>
        </div>
        
    </div>
  )
}

export default ButtonToCreateLog
