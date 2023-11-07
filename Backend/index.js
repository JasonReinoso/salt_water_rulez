import express,  {response} from "express";
import axios from "axios";
import bodyParser from "body-parser";
import mysql2 from "mysql2";
import dotenv from 'dotenv';
import {getregulation,getregulationbystate,getStates, sendlog } from "./server.js";
import {getlogs} from './server.js';
import cors from 'cors';
import multer from "multer";
import {dirname} from 'path';
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('Images'));

var DATENOWfilename;


app.get('/', (req,res)=>{
    res.json({mssg: 'weclome'})
})

app.get("/regulations", async (req,res)=>{
   
    const regulations = await getregulation();
    res.send(regulations)
    
})

app.get("/regulations/:state", async (req,res)=>{
    const state = req.params.state;
    const regulations = await getregulationbystate(state);
    res.send(regulations);    
})
4
app.get("/states", async (req,res)=>{
    const ListOfStates = await getStates();
    res.send(ListOfStates);
})

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        return cb(null,"./Images")
    },
    filename: function(req,file,cb){
        DATENOWfilename = `${Date.now()}_${file.originalname}`;
        return cb(null,DATENOWfilename);
    }
})

const upload = multer({storage});

app.post("/logs",  upload.single('file'), (req,res)=>{
    console.log(req.file);
    console.log(req.body)
    const METADATA = req.file;
    const imagefilepath = "/Images/" + DATENOWfilename;
    //console.log(req.file);
    sendlog(req.body, imagefilepath);
    res.sendStatus(201);
    
    res.end();

});

app.get("/Getlogs", async (req,res)=>{
  const Logs = await getlogs();
  res.send(Logs);
})


app.get("/picture", async (req,res)=>{

    const logs = await getlogs();
    console.log(logs);
    const picture = __dirname + logs[0].picture;
    res.sendFile(picture);
  // res.sendStatus(200);
})



//listen to request
app.listen(4000,()=>{
    console.log('listening')
})

