

import mysql2 from "mysql2";

import dotenv from 'dotenv';
dotenv.config();
 const pool = mysql2.createPool({
    host: process.env.MYSQL_HOST, 
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
    }).promise()

export async function getregulation(){
    const [fish_regulations] = await pool.query("select * from fish_regulations")
    return fish_regulations;
    }

export async function getStates()
{
    const [ListOfStates] = await pool.query("select * from States");
    return ListOfStates;
}
