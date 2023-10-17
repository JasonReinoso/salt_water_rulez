import express,  {response} from "express";
import axios from "axios";
import bodyParser from "body-parser";
import mysql2 from "mysql2";
import dotenv from 'dotenv';
import {getregulation,getStates } from "./server.js";
import cors from 'cors';
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.get('/', (req,res)=>{
    res.json({mssg: 'weclome'})
})

app.get("/regulations", async (req,res)=>{
    const regulations = await getregulation();
    res.send(regulations)
    console.log(regulations);
})

app.get("/states", async (req,res)=>{
    const ListOfStates = await getStates();
    res.send(ListOfStates);
})



//listen to request
app.listen(4000,()=>{
    console.log('listening')
})

