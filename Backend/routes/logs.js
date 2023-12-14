import express from 'express';
import multer from 'multer';
import { getlogs, sendlog } from '../server.js';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
const router = express.Router();

const __dirname = dirname(fileURLToPath(import.meta.url));

var DATENOWfilename;


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



router.post("/",upload.single('file'),(req,res)=>{
    console.log(req.file);
    console.log(req.body)
    const METADATA = req.file;
    const imagefilepath =  DATENOWfilename;
    //console.log(req.file);
    sendlog(req.body, imagefilepath);
    res.sendStatus(201);    
    res.end();
})


router.get("/Getlogs", async (req,res)=>{
    const Logs = await getlogs();
    res.send(Logs);
})

router.get("/picture/:imagename",async (req,res)=>{
    const picturename = req.params.imagename;
    const picturepath = __dirname + "/Images/" + picturename;
    console.log(picturepath);
    res.sendFile(picturepath);
})


export default router;