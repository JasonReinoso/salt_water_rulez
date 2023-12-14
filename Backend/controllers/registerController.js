import bycript from "bcrypt"
import { StoreUser, doesithaveduplicate } from "../server.js";

  const handleNewUser = async (req,res)=>{
    const  {Username,Password,Email} = req.body;
    console.log(Username +  Password + Email)
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
        return res.sendStatus(409);       
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

}

export default {handleNewUser}