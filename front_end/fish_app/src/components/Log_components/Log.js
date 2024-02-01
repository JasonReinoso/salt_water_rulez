import React from 'react'
import {  useState  } from 'react'
import CreateLogpopup from './CreateLog/CreateLogpopup';
import ViewLog from './ViewLog';
import ButtonToCreateLog from './ButtonToCreateLog';
import Nav_bar from '../New_Menu_Components/Nav_bar.js'
import Navitem from '../New_Menu_Components/Navitem.js'
import DropdownMenuProfile from '../New_Menu_Components/DropdownMenuProfile.js'
import DropdownMenu from '../New_Menu_Components/DropDownMenu.js';
function Log() {

  const [popup,SetPopMenu] = useState(false);
  const [fishlogs,Setfishlogs] = useState([]);

  const [profileOpen, setProfileOpen] = useState(false);
  const [MenuOpen, setMenuOpen] = useState(false);
  return (
      <div className='Log'>
        <Nav_bar title="Salt Water Rulez">
          {/* <Navitem name ='Profile'
            setOpen={setProfileOpen}
            Open={profileOpen}
            setShouldBeClosed={setMenuOpen}>
            <DropdownMenuProfile/>
          </Navitem>
          <Navitem name ='Menu'
          setOpen={setMenuOpen}
          Open={MenuOpen}
          setShouldBeClosed={setProfileOpen}>
            <DropdownMenu/>
          </Navitem> */}
        </Nav_bar>
        {popup && <CreateLogpopup SetPopMenu = {SetPopMenu} popup ={popup} Setfishlogs={Setfishlogs} />}
        <ButtonToCreateLog popup={popup} SetPopMenu={SetPopMenu}></ButtonToCreateLog>
        <ViewLog fishlogs={fishlogs} Setfishlogs={Setfishlogs}/>
      </div>
    
  )
}

export default Log