import {pool} from '../server.js'


export async function doesithaveduplicate(Username)
{
    const result = await pool.query("Select Username from user where Username = ? and Username IS NOT NULL",[Username]);
    

   // return result[0][0].Username === Username;
    if (result[0][0] === undefined)
    return false;

    return result[0][0].Username === Username;
   
}

function getdate()
{
    let date = new Date();
    return date.toISOString().split('T')[0]+' '+date.toTimeString().split(' ')[0];
}


export  function StoreUser(Username,Password,Email)
{

    pool.query('INSERT INTO user(Username,passwords,Email,Created,Updated) VALUES(?,?,?,?,?)',[Username,Password,Email,getdate(),getdate()])
}

var getuserquery = "Select * from user where username = ?";
export async function getuser(Username)
{
     const result = await pool.query(getuserquery,[Username]);
     return result[0][0];
}

export async function matchuser(Username)
{
   const result = await pool.query(getuserquery,[Username]);
    console.log(result[0][0]);
    if(result[0][0]=== undefined)
    return false;

    if(result[0][0].Username===Username)
    return true;
    
    return false;
}

