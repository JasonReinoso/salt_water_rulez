const express = require('express')
const app = express()

import  dotenv from 'dotenv'
export {getregulation};

const pool = mysql2.createPool({
    host: process.env.MYSQL_HOST, 
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
    }).promise()

    export async function getregulation(){
        const [row] = await pool.query("select * from States")
        return row;
    }

