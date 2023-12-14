
import express from "express";

import { getStates, getregulation, getregulationbystate } from "../server.js";
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router();

router.get("/",async (req,res)=>{
    const regulations = await getregulation();
    res.send(regulations);
})


router.get("/:state", async (req,res)=>{
    const state = req.params.state;
    const regulations = await getregulationbystate(state);
    res.send(regulations);
})

router.get("/states", verifyJWT, async (req,res)=>{
    const ListofStates = await getStates();
    res.send(ListofStates);
})

export default router