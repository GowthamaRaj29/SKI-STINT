import React from 'react'
import "./navbar.css"
import Search from "../Components/Icons/search(1).png";
import Profile from "../Components/Icons/boy.jpg"
export default function Navbar() {
  return (
   <div className='MainNavbarContainer'>
    <div className='dashboardContainer'>
      <h1 className='dashtext'>SKI-STINT</h1>
    </div>
    <div className='searchItemsContainer'>
      <img src={`${Search}`} className="searchIcon" alt=""/>
      <input className='searchInput' placeholder='Search' type="search"/>
    </div>
      <div className='profileItemsContainer'>
      <div className='profileItems'>
        <img src={`${Profile}`} className="ProfileIcon" alt=""/>
        <p className='profileName'>Admin</p>
    </div>
    </div>
   </div>
  )
}
