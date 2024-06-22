import React from 'react'
import "./sidebar.css";
import Dash from "../Components/Icons/dash.png";
import Task from "../Components/Icons/task.png";
import Report from "../Components/Icons/report.png";
import Users from "../Components/Icons/users.png"
import Exit from "../Components/Icons/exit.png"
import AdminLogo from "../Components/Icons/AdminLogo.png"
import Button from '@mui/material/Button';
export default function  Sidebar() {
  return (
    <div className='mainSidebarContainer'>
      <div>
      <div className='adminContainer'>
        <img src={`${AdminLogo}`} className="logoicon" alt="logo"/>
      </div>
        <ul className='ulContainer'>
        <h4 className='tools'>Admin Tools</h4>
            <li className='liContainer'>
                <img src={`${Dash}`} className="sidebaricons" alt=""/>
                <p className='itemNames'>Dashboard</p>
            </li>
            <li className='liContainer'>
                <img src={`${Task}`} className="sidebaricons" alt=""/>
                <p className='itemNames'>Taskboard</p>
            </li>
            <li className='liContainer'>
                <img src={`${Users}`} className="sidebaricons" alt=""/>
                <p className='itemNames'>User</p>
            </li>
            <li className='liContainer'>
                <img src={`${Report}`} className="sidebaricons" alt=""/>
                <p className='itemNames'>Report</p>
            </li>
        </ul>
        <div className='logout'>
        <Button variant="contained" color="warning">Logout</Button>
        </div>
      </div>
    </div>
  )
}
