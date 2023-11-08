import React from 'react'
import './Log.css'
function Fish_report(props) {
  return (
    <div className='Fish_report'>
        <a>{props.children.fecha}</a>
        <a>{props.children.TypeofFish}</a> 
        <a>{props.children.length}</a>
        <img src={`http://localhost:4000/picture/${props.children.picture}`} className='fish_pic'></img>
        <label>{props.children.weight}</label>
        <label> {props.children.weight}</label>
  
        <label>{props.children.tools}</label>
    </div>
  )
}

export default Fish_report