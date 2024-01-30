import {pool} from '../server.js'


export async function getlogs()
{
   
    const [Logs] = await pool.query("Select * from Log where username = ?",["username"]);
    return Logs;
}

export  function sendlog(log, filepath)
{
    pool.query(InsertIntoLog,[filepath,log.Fish_Released,log.Fish_Species,log.weight,log.Length,log.Equipment,log.Fish_Method,log.Date,"username","weather"])
   
}