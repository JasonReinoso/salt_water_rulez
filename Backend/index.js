import express,  {response} from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import {getregulation,getregulationbystate,getStates, sendlog,  StoreUser, doesithaveduplicate } from "./server.js";
import {getlogs} from './server.js';
import cors from 'cors';
import multer from "multer";
import {dirname} from 'path';
import { fileURLToPath } from "url";
import bycript from "bcrypt"

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
    const imagefilepath =  DATENOWfilename;
    //console.log(req.file);
    sendlog(req.body, imagefilepath);
    res.sendStatus(201);
    
    res.end();

});

app.post("/register", async (req,res)=>{
    const  {Username,Password,Email} = req.body;
    if(!Username || !Password)  
        {
            console.log("1");
            return res.sendStatus(400).json({'message':'Username and password are required'}); 
           
        }
    //check for duplicate usernames 
    const duplicate = await doesithaveduplicate(Username);
    if(duplicate)
    {
        console.log("2");
        return res.sendStatus(401);       
    }
    try{
        //encrypt the password
        const hashPwd = await bycript.hash(Password,10);
        StoreUser(Username,hashPwd,Email);
        console.log("3");
       return res.status(201).json({'Success':`New user ${Username} created!`});
    }
    catch(err){
        console.log(err.message);
        return  res.status(500).json({'message':err.message})
        
    }

})

app.get("/Getlogs", async (req,res)=>{
  const Logs = await getlogs();
  res.send(Logs);
})


app.get("/picture/:imagename", async (req,res)=>{ 
    const picturename = req.params.imagename;
    const picturepath = __dirname + "/Images/" + picturename;
    console.log(picturepath);
    res.sendFile(picturepath);
})



//listen to request
app.listen(4000,()=>{
    console.log('listening')
})

