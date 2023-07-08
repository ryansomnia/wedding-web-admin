import React from 'react'
import { NavLink } from "react-router-dom";
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="sidebar-header">
      <img src="logo.png" alt="Logo" className="logo" />
      <span className="admin-panel-text">Admin Panel</span>
    </div>

    <ul className="sidebar-nav">
      <li className="sidebar-item">
        <NavLink exact to="/" activeClassName="active">
          Dashboard
        </NavLink>
      </li>
      <li className="sidebar-item">
        <NavLink to="/datauser" activeClassName="active">
          Users
        </NavLink>
      </li>
      
     
    </ul>
  </div>
  )
}

export default Sidebar