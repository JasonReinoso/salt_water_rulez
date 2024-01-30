import {pool} from '../server.js'

export async function getRefreshToken(refreshtoken)
{
    var query = 'select token from refresh_tokens where token = ?';
    const result = await pool.query(query,[refreshtoken]);
    if(result[0][0] ===undefined)
        return false

    return true;
}


export async function addRefreshTokenToDb(username,refreshToken,expiresAt)
{
     const insertQuery = 'INSERT INTO refresh_tokens(username,token,expires_at) VALUES (?,?,?)';
     const values = [username,refreshToken,expiresAt];
     await pool.query(insertQuery,values);
     return;
}