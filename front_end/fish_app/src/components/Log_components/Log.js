import React from 'react'
import {  useState  } from 'react'
import CreateLogpopup from './CreateLog/CreateLogpopup';
import ViewLog from './ViewLog';
import ButtonToCreateLog from './ButtonToCreateLog';
import Nav_bar from '../inPageNavBar/Nav_bar.js'
import Navitem from '../inPageNavBar/Navitem.js'
import DropdownMenuProfile from '../inPageNavBar/DropdownMenuProfile.js'
import DropdownMenu from '../inPageNavBar/DropDownMenu.js';
function Log() {

  const [popup,SetPopMenu] = useState(false);
  const [fishlogs,Setfishlogs] = useState([]);

  const [profileOpen, setProfileOpen] = useState(false);
  const [MenuOpen, setMenuOpen] = useState(false);
  return (
      <div className='Log'>
        <Nav_bar title="Salt Water Rulez"
        page={"Regulations"}
        />
        {popup && <CreateLogpopup SetPopMenu = {SetPopMenu} popup ={popup} Setfishlogs={Setfishlogs} />}
        <ButtonToCreateLog popup={popup} SetPopMenu={SetPopMenu}></ButtonToCreateLog>
        <ViewLog fishlogs={fishlogs} Setfishlogs={Setfishlogs}/>
      </div>
    
  )
}

export default Log