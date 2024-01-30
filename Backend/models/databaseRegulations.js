import {pool} from '../server.js'

export async function getregulation(){
    const [fish_regulations] = await pool.query("select * from fish_regulations")
    return fish_regulations;
    }


    export async function getregulationbystate(id){
        const[state_regulation] = await pool.query("select * from fish_regulations where state_id = ?",[id]);
        return state_regulation;
    }
    
    export async function getStates()
{
    const [ListOfStates] = await pool.query("select state_id from States");
    return ListOfStates;
}

