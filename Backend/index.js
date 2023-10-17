import express,  {response} from "express";
import axios from "axios";
import bodyParser from "body-parser";
import mysql2 from "mysql2"
import dotenv from 'dotenv'
import {getregulation} from "../server";
dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    res.json({mssg: 'weclome'})
})

app.get("/regulations",(req,res)=>{
    res.send("testing 1  2 3 ");
})



//listen to request
app.listen(4000,()=>{
    console.log('listening')
})

