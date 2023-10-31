import React from 'react'
import './popup.css'
function CreateLogpopup(props) {
  return (
    <div className='Popup'>
        <div className='popup-inner'>
            CreateLogpopup 
            <button className ="Close" onClick={()=>props.SetPopMenu(!props.popup)}>Close</button>
            <div className='Fish_Species'>
                <label>Fish Species: </label>
                <input type='text'></input>
            </div>
            <div className='Fish_Released'>
                <label>Fish Released?</label>
                <button>Released</button> <button>Harvested</button>
            </div>
            <div className='Fish_Method'>
                <label>Fishing Method</label>
                <input type='text'></input>
            </div>
            <div className='weight'>
                <label>weight</label>
                <input type='number' min="0"></input>
            </div>
            <div className='Length'>
                <label>Length</label>
                <input type='number' min="0"></input>
            </div>
            <div className='Equipment'>
                <label>Equipment</label>
                <input type='text'></input>
            </div>
            <div className='Weather'>
                <label>Weather</label> 
            </div>
            <div className='Date'>
                <label>Date: </label>
                <input type='Date'></input>
            </div>
            

        
        </div>
    </div>
  )
}

export default CreateLogpopup