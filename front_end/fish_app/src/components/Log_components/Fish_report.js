import React from 'react'
import './Log.css'
function Fish_report(props) {
  return (
    <div className='Fish_report'>
        <a>{props.children.fecha}</a>
        <a>{props.children.TypeofFish}</a> 
        <a>{props.children.length}</a>
        <label>{props.children.weight}</label>
        <label> {props.children.weight}</label>

        <label>{props.children.tools}</label>
    </div>
  )
}

export default Fish_report