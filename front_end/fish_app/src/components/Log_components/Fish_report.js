import React,{useState,useEffect} from 'react'
import './Log.css'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { random } from 'superheroes';
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';
function Fish_report(props) {

  const [imageData, setImageData] = useState(null);
  const axiosPrivate = useAxiosPrivate();
  const {auth} = useAuth();
  useEffect( ()=>{
    async function fetchpicture() 
    {
      try{
        
       // const response = await axiosPrivate.get(`/logs/picture/${props.children.picture}`)
        const response = await axios.get("http://localhost:4000/logs/picture/" + props.children.picture,{
        headers:{
          'Authorization':`Bearer ${auth?.accessToken}`
        },  
        responseType: 'blob'
        });
         
        const imageURL = URL.createObjectURL(response.data);
    
        setImageData(imageURL);
        
      }
      catch(error)
      {
        console.log(error);
        
      }
      
    }


    fetchpicture();
  },[props.children.picture])

  return (
    <div className='Fish_report'>
        <span>Date: {props.children.fecha}</span>
        <span>Type of Fish: {props.children.TypeofFish}</span>
        <span>Length: {props.children.length} inches</span>
        <span>Weight: {props.children.weight} inches</span>
        <span>Fish Method: {props.children.FishMethod} </span> 
        <span>Tools: {props.children.tools}</span>
        <p>{props.children.picture}</p>
        <button onClick={()=>{
          console.log(test);
        }}>checker</button>
        <img src={imageData} className='fish_pic'></img>
        
    </div>
  )
}

export default Fish_report