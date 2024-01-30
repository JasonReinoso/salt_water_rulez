import jwt from 'jsonwebtoken';
import bycript from "bcrypt"
import { addRefreshTokenToDb } from '../models/databaseJWT.js';
import {getuser,matchuser} from '../models/databaseUsers.js';

const handleLogin = async (req,res)=>{
    const {Username,Password,Email} =req.body;
    console.log(req.body);
   if(!Username || !Password) return res.status(400).json({'message':"Username and Password are required"});
    
   const foundUser= await matchuser(Username);
    if(!foundUser) return res.sendStatus(401);
   // evaluate password;
   const Userinfo = await getuser(Username);
   const match = await bycript.compare(Password, Userinfo.passwords);

   if(!match)
    return res.sendStatus(401);

  
    //create JWTs
    const accessToken = jwt.sign(
        {"username":Userinfo.Username},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:'50s'}
    );
    const refreshToken = jwt.sign(
        {"username":Userinfo.Username},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:'1d'}
    );
    const expiresAt = new Date(Date.now()+7*24*60*60*1000);
    addRefreshTokenToDb(Userinfo.Username,refreshToken,expiresAt);
    res.cookie('jwt',refreshToken,{httpOnly:true,sameSite:'None', secure:true,maxAge:24*60*60*1000});
    res.json({accessToken})
}

export default {handleLogin}