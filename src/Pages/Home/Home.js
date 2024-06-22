import React from 'react'
import HomeRightbar from '../../Components/HomeRightbar/HomeRightbar'
import Sidebar from '../../Components/Sidebar'
import "./home.css"
export default function Home() {
  return (
    <div className='MainHomeContainer'>
    <Sidebar/>
    <HomeRightbar/>
    </div>
  )
}
