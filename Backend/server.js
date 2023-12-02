

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



export async function doesithaveduplicate(Username)
{
    const result = await pool.query("Select Username from user where Username = ? and Username IS NOT NULL",[Username]);
    

   // return result[0][0].Username === Username;
    if (result[0][0] === undefined)
    return false;

    return result[0][0].Username === Username;
   
}

export  function StoreUser(Username,Password,Email)
{

    pool.query('INSERT INTO user(Username,passwords,Email,Created,Updated) VALUES(?,?,?,?,?)',[Username,Password,Email,getdate(),getdate()])
}

function getdate()
{
    let date = new Date();
    return date.toISOString().split('T')[0]+' '+date.toTimeString().split(' ')[0];
}

var getuserquery = "Select * from user where username = ?";
export async function getuser(Username)
{
     const result = await pool.query(getuserquery,[Username]);
     return result[0][0];
}

export async function matchuser(Username)
{
   const result = await pool.query(getuserquery,[Username]);
    console.log(result[0][0]);
    if(result[0][0]=== undefined)
    return false;

    if(result[0][0].Username===Username)
    return true;
    
    return false;
}