import React from 'react'
import '../components/Navbar.css';
import { Link } from 'react-router-dom';
import logo from "../asset/logo.svg"

const Navbar = () => {
  return (
    <nav  className='nav-bar wrapper'>

       <Link to="/" className='nav-logo'> <img src={logo}></img></Link>

        <div className='nav-menu'>
             <Link to="/favorite" className='nav-menu-option'>Favorites</Link>
        </div>
    
    </nav>
  )
}

export default Navbar