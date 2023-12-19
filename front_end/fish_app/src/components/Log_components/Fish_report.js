import React from 'react'
import './Log.css'
function Fish_report(props) {
  return (
    <div className='Fish_report'>
        <span>Date: {props.children.fecha}</span>
        <span>Type of Fish: {props.children.TypeofFish}</span>
        <span>Length: {props.children.length} inches</span>
        <span>Weight: {props.children.weight} inches</span>
        <span>Fish Method: {props.children.FishMethod} </span> 
        <span>Tools: {props.children.tools}</span>
        <img src={`http://localhost:4000/logs/picture/${props.children.picture}`} className='fish_pic'></img>
    </div>
  )
}

export default Fish_report