import React from 'react'
import './Regulations.css'
function Regulation_Table(props) {
  return (
    <div className='regulation'>
        <table className='regulation_table'>
            <thead>
                <tr>
                    <td>Fish species</td>
                    <td>Size limit</td>
                    <td>Daily possession limit</td>
                    <td>opean season</td>
                </tr>
            </thead>
            <tbody>
                {props.Regulations.map((item)=>{
                    return(
                        <tr>
                        <td>{item.fish_species}</td>
                        <td>{item.size_limit}</td>
                        <td>{item.Daily_possession_Limit}</td>
                        <td>{item.open_season}</td>
                        </tr>
                    )
                    
                })}
            </tbody>
        </table>
        
    </div>
  )
}

export default Regulation_Table