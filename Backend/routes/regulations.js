
import express from "express";

import { getStates, getregulation, getregulationbystate } from "../server.js";
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router();

router.get("/",async (req,res)=>{
    const regulations = await getregulation();
    res.send(regulations);
})

router.get("/states", async (req,res)=>{
    const ListofStates = await getStates();
    console.log("fffffffffffffffffffffffffffffffff");
    res.send(ListofStates);
})

router.get("/:state", async (req,res)=>{
    const state = req.params.state;
    const regulations = await getregulationbystate(state);
    res.send(regulations);
})



export default router