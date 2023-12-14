import express,  {response} from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import {getregulation,getregulationbystate,getStates, sendlog,  StoreUser, doesithaveduplicate, matchuser, getuser, addRefreshTokenToDb, getRefreshToken } from "./server.js";
import {getlogs} from './server.js';
import cors from 'cors';
import multer from "multer";
import {dirname} from 'path';
import { fileURLToPath } from "url";
import bycript from "bcrypt"
import jwt from 'jsonwebtoken';
import {promises as fsPromises} from 'fs';
import path from "path";
import cookieParser from "cookie-parser";
import verifyJWT from './middleware/verifyJWT.js';
import regulationsRouter from './routes/regulations.js';
import registerRouter from './routes/register.js';
import logRouter from './routes/logs.js';
import authRouter from './routes/auth.js'
import refreshRouter from './routes/refresh.js'
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.options('*', cors({origin:true,credentials:true}));
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", 'http://192.168.1.57:3000/'); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials",true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    next();
  });

app.use(express.static('Images'));




app.get('/', (req,res)=>{
    res.json({mssg: 'weclome'})
})


////////////////////testing new route
app.use("/regulations", regulationsRouter);
app.use("/register",registerRouter);
app.use("/logs",logRouter);
app.use("/Login",authRouter);
app.use("/refresh",refreshRouter);



//listen to request
app.listen(4000,()=>{
    console.log('listening')
})

