

import mysql2 from "mysql2";

import dotenv from 'dotenv';
dotenv.config();

 const pool = mysql2.createPool({
    host: process.env.MYSQL_HOST, 
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
    }).promise()


  var InsertIntoLog = 'INSERT INTO Log(picture,released,TypeofFish,weight,length,tools,FishMethod,fecha,username,weather) VALUES(?,?,?,?,?,?,?,?,?,?)';

export async function getregulation(){
    const [fish_regulations] = await pool.query("select * from fish_regulations")
    return fish_regulations;
    }

export async function getregulationbystate(id){
    const[state_regulation] = await pool.query("select * from fish_regulations where state_id = ?",[id]);
    return state_regulation;
}

export async function getStates()
{
    const [ListOfStates] = await pool.query("select state_id from States");
    return ListOfStates;
}

export  function sendlog(log, filepath)
{
    pool.query(InsertIntoLog,[filepath,log.Fish_Released,log.Fish_Species,log.weight,log.Length,log.Equipment,log.Fish_Method,log.Date,"username","weather"])
   
}

export async function getlogs()
{
   
    const [Logs] = await pool.query("Select * from Log where username = ?",["username"]);
    return Logs;
}