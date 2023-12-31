import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const verifyJWT = (req,res,next)=>{
    const authHeader = req.headers['authorization'];
    if(!authHeader) return res.sendStatus(401);
   // console.log(authHeader); // bearer token
    const token = authHeader.split('Bearer ')[1];
    console.log(token);
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err,decoded) =>{
            if(err) 
            { 
                return res.sendStatus(403); // invalid token
            }
           
            req.user = decoded.username;
            next();
        }
    );
}

 export default verifyJWT
