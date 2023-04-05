import React from 'react'
import '../App.css'
import logo from '../img/logo.jpeg'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo}/>
      <div className="navwrapper">
        <button className='btn'>ABOUT</button>
      <button className='btn'>
       <NavLink style={{textDecoration: 'none', color: '#FFF'}}  to="/Login"> SIGN UP / LOG IN</NavLink>
        </button>
        </div>
    </div>
  )
}

export default Navbar
