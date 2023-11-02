import React from 'react'
import './popup.css'
import { useState } from 'react'
import axios from 'axios';

function CreateLogpopup(props) {

  const [Fish_Species,Set_Fish_Species] = useState("");
  const [Image,SetImage] = useState("Test");
  const [Fish_Released,Set_Fish_Released] = useState("");
  const [Fish_Method,Set_Fish_Method] = useState("");
  const [weight,Set_Weight] = useState("");
  const [Length,Set_Length] = useState("");
  const [Equipment, Set_Equipment] = useState("");
  const [Weather, Set_Weather] = useState("");
  const [Date,Set_Date] = useState("");

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file',Image);
    formData.append('Fish_Species', Fish_Species);
    formData.append('Fish_Released', Fish_Released);
    formData.append('Fish_Method', Fish_Method);
    formData.append('weight', weight);
    formData.append('Length',Length);
    formData.append('Equipment',Equipment);
    formData.append('Weather',Weather);
    formData.append('Date',Date);

   await axios.post("http://localhost:4000/logs",formData,{
    headers:{
        'Content-Type':'multipart/form-data',
    }})
  }

  return (
    <div className='Popup'>
        <div className='popup-inner'>
            CreateLogpopup 
            <button className ="Close" onClick={()=>props.SetPopMenu(!props.popup)}>Close</button>
           
            <div className='Fish_Species'>
                <label>Fish Species: </label>
                <input type='text' onChange={(e)=>Set_Fish_Species(e.target.value)}></input>
            </div>
            <div className='Fish_image'>
                <label>Image: </label>
                <input type="file" name="image" accept="image/*" onChange={(e)=>SetImage(e.target.files[0])} ></input>
            </div>
            <div className='Fish_Released'>
                <label>Fish Released?</label>
                <button onClick={()=>Set_Fish_Released("Released")}>Released</button>   <button onClick={()=>Set_Fish_Released("Harvested")}>Harvested</button>
            </div>
            <div className='Fish_Method'>
                <label>Fishing Method</label>
                <input type='text'  onChange={(e)=>Set_Fish_Method(e.target.value)}></input>
            </div>
            <div className='weight'>
                <label>weight</label>
                <input type='number' min="0"   onChange={(e)=>Set_Weight(e.target.value)}></input>
            </div>
            <div className='Length'>
                <label>Length</label>
                <input type='number' min="0"  onChange={(e)=>Set_Length(e.target.value)}></input>
            </div>
            <div className='Equipment'>
                <label>Equipment</label>
                <input type='text' onChange={(e)=>Set_Equipment(e.target.value)}></input>
            </div>
            <div className='Weather'>
                <label>Weather</label> 
            </div>
            <div className='Date'>
                <label>Date: </label>
                <input type='Date' onChange={(e)=>Set_Date(e.target.value)}></input>
            </div>
        

            <button onClick={onSubmit}> Submit</button>
        </div>
    </div>
  )
}

export default CreateLogpopup