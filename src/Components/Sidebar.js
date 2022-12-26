import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import  logo from './cal.png.png'


function Sidebar() {
  return (
    <div className='sidebar-wrapper'>
        <div className='sidebar-list-wrapper-top'>
            <div className='sidebar-top-wrapper'>
                <img src={logo} className="Logo" alt='logo'></img>
            </div>
            <div className='sidebar-top-wrapper-list'>
                <ul className='top-list'>
                    <li className='top-list-item'><Link to='/'>Home</Link></li>
                    <li className='top-list-item'><Link to='/courses'>Courses</Link></li>
                    <li className='top-list-item'><Link to='/quiz'>Quiz</Link></li>
                    <li className='top-list-item'><Link to='/games'>Games</Link></li>
                    <li className='top-list-item'><Link to='/Forum'>Forum</Link></li>
                    <li className='top-list-item'><Link to='/Developers'>Developers</Link></li>
                </ul>
            </div>
        </div>
        <div className='sidebar-list-wrapper-mid'>
            <ul className='mid-list'>
                    <li className='mid-list-item'>Home</li>
                    <li className='mid-list-item'>Courses</li>
                    <li className='mid-list-item'>Quiz</li>
                    <li className='mid-list-item'>Forum</li>
                    <li className='mid-list-item'>Developers</li>
                </ul></div>
        <div className='sidebar-list-wrapper-bottom'>
            <p>Sign out</p>
        </div>
    </div>
  )
}

export default Sidebar