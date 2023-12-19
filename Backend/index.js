import express,  {response} from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import cors from 'cors';
import {dirname} from 'path';
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import verifyJWT from './middleware/verifyJWT.js';
import credentials from "./middleware/credentials.js";
import regulationsRouter from './routes/regulations.js';
import registerRouter from './routes/register.js';
import logRouter from './routes/logs.js';
import authRouter from './routes/auth.js'
import refreshRouter from './routes/refresh.js'
import logoutRouter from './routes/logout.js'
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(credentials);
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
app.use("/register",registerRouter);
app.use("/Login",authRouter);
app.use("/refresh",refreshRouter);
app.use("/logout",logoutRouter);
app.use(verifyJWT);
app.use("/regulations", regulationsRouter);
app.use("/logs",logRouter);
app.use("/logout", logoutRouter);



//listen to request
app.listen(4000,()=>{
    console.log('listening')
})

