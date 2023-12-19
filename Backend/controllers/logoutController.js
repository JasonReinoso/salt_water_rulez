import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { getRefreshToken } from '../server.js';
import mysql2 from "mysql2";

dotenv.config();

 const pool = mysql2.createPool({
    host: process.env.MYSQL_HOST, 
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
    }).promise()


async function deleteUser(refreshToken)
{
    var query = 'Delete from refresh_tokens where token = ?';
    await pool.query(query,[refreshToken]);
    return;
}


const handleLogout = async (req,res) =>{
    //on client, delete the accessToken
    const cookies = req.cookies;
    if(!cookies?.jwt) return res.sendStatus(204);
    const refreshToken = cookies.jwt;
    
    const foundUser = getRefreshToken(refreshToken);
    if(!foundUser) 
    {
       res.clearCookie('jwt',{httpOnly:true})
       return res.sendStatus(403); 
    }
    
    //delete refreshToken
   await deleteUser(refreshToken);
   res.clearCookie('jwt',{httpOnly:true,sameSite:'None', secure:true});
   res.sendStatus(204);
}

export default {handleLogout}