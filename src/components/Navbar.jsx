import React from 'react'
import { Link, useNavigate } from "react-router-dom";


export const Navbar = () => {
  return (
    <div className='main_container'>
      <div className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </div>
    </div>
  )
}
