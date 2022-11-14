import React from "react";
import { NavLink } from "react-router-dom";

import './NavBar.css'
const NavBar=()=>{
  return(<>
  <div className="Nav_style">
  <NavLink to='/' className="li">Home
  </NavLink>
  <NavLink to='/about' className="li">About
  </NavLink>
  <NavLink to='/contact' className="li">Contact
  </NavLink>
    <NavLink to='/input' className="li">ToDo List
  </NavLink>
  <NavLink to='/fetch_api' className="li">API
  </NavLink>
  <NavLink to='/user/muneeb/mughal' className="li">User
  </NavLink>
  </div>

</>
  )
}

export default NavBar