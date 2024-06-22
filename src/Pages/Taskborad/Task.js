import React from 'react'
import "./task.css"
import Sidebar from '../../Components/Sidebar'
import Taskboard from '../../Components/Taskboard'
export default function Task() {
  return (
    <div className='taskContainer'>
        <Sidebar/>
        <Taskboard/>
    </div>
  )
}
