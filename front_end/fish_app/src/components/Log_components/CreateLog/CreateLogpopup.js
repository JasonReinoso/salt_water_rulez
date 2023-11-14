import React from 'react'
import './popup.css'
import { useState } from 'react'
import axios from 'axios';
import {formDatas, InputField,InputFieldNumerical}  from './Functions.js'
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

  async function getlogs()
  {
    const response = await axios.get("http://localhost:4000/Getlogs");
    props.Setfishlogs(response.data) 
  }

  async function onSubmit(e) {
    e.preventDefault();

    const formData = formDatas(Fish_Species,Image,Fish_Released,Fish_Method,weight,Length,Equipment,Weather,Date);
 

   await axios.post("http://localhost:4000/logs",formData,{
    headers:{
        'Content-Type':'multipart/form-data',
    }})

    props.SetPopMenu(!props.popup);
    getlogs();

  }

  return (
    <div className='Popup'>
        <div className='popup-inner'>
            <label className='Title'>Glub Glub </label>
            <button className ="Close" onClick={()=>props.SetPopMenu(!props.popup)}>X</button>
            
            <InputField label ='Fish Species' typeofinput='text' classname='Fish_Species' setter={Set_Fish_Species}></InputField>
            
           
            <div className='Fish_image'>
                <label>Image: </label>
                <input type="file" name="image" accept="image/*" onChange={(e)=>SetImage(e.target.files[0])} ></input>
            </div>

            <div className='Fish_Released'>
                <label>Fish Released?</label>
                <div className='Fish_Released_Buttons'>
                  <button className={Fish_Released==='Released'? 'Released':'normal'} onClick={()=>Set_Fish_Released("Released")}>Released</button>   
                  <button className={Fish_Released==='Harvested'? 'Harvested':'normal'} onClick={()=>Set_Fish_Released("Harvested")}>Harvested</button>
                </div>
            </div>
            <InputField label='Fishing Method' typeofinput='text' classname='Fish_Method' setter={Set_Fish_Method}></InputField>
          
            <InputFieldNumerical label='Weight' typeofinput='number' classname='weight' setter={Set_Weight}></InputFieldNumerical>
            
            <InputFieldNumerical label='Length' typeofinput='number' classname='Length' setter={Set_Length}></InputFieldNumerical>
          
            <InputField label ='Equipment' typeofinput='text' classname='Equipment' setter={Set_Equipment}></InputField>
            
            <div className='Weather'>
                <label>Weather</label> 
            </div>

            <InputField label ='Date' typeofinput='Date' classname='Date' setter={Set_Date}></InputField>

            <button className='submit' onClick={onSubmit}> Submit</button>
        </div>
    </div>
  )
}

export default CreateLogpopup