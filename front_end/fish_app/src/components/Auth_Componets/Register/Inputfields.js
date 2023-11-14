import React from 'react'

function Inputfields({className,typeofinput,setter})
  {
    return(
      <div className={className}>
        <label>{className}:</label>
        <input type={typeofinput} onChange={(e)=>setter(e.target.value)}></input>
      </div>
      
    )
  }

export default Inputfields