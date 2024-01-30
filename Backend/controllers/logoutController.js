import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { getRefreshToken } from '../models/databaseJWT.js';
import mysql2 from "mysql2";

dotenv.config();

 const pool = mysql2.createPool({
    host: process.env.MYSQL_HOST, 
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
    }).promise()

    async function findUserbyToken(refreshToken)
    {
        var query = "select Username from refresh_tokens where token = ?";
        const result = await pool.query(query,[refreshToken]);
        return result[0][0].Username;
    }


async function deleterefreshToken(refreshToken)
{
    var query = 'Delete from refresh_tokens where Username = ?'; 
    const Username =  await findUserbyToken(refreshToken);
    await pool.query(query,[Username]);
   
    return;
}


const handleLogout = async (req,res) =>{
    //on client, delete the accessToken
    console.log(req.cookies);
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
   await deleterefreshToken(refreshToken);
   res.clearCookie('jwt',{httpOnly:true,sameSite:'None', secure:true});
   res.sendStatus(204);
}

export default {handleLogout}