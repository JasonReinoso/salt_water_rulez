import React from 'react'

function State_selector(props) {
  return (
    <div className='State_selector'>
        <label> Choose a state: </label>
        <select className='menuforstates' onChange={(e)=>{props.getregulation(e.target.value)}}>
            <option value=""></option>
            {props.States.map((item)=>{
                return(
                    <option value={item.state_id}>{item.state_id}</option>
                )
            })}
        </select>
    </div>
  )
}

export default State_selector