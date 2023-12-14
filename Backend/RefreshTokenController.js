import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { getRefreshToken } from './server';

dotenv.config();


const handleRefreshToken = (req,res)=>{
    const cookies = req.cookies;
    if(!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;
    const foundUser = getRefreshToken(refreshToken);
    if(!foundUser) return res.sendStatus(403);
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err,decoded)=>{
            if(err )//CHANGE THIS LATER !!
            {
                return res.sendStatus(403);
            } 
            const accessToken = jwt.sign(
                {"username":decoded.username},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn:'30s'}
            );
            res.json({accessToken});
        }
    )
}

module.exports={handleRefreshToken};