import React from 'react'
import {Route,Routes,Link} from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';
import Login from '../login/Login';
import "bootstrap/dist/css/bootstrap.min.css";
// import './navbar.css'
// import Navbar from 'react-bootstrap/Navbar'

function NavbarComp() {


  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="collapse navbar-collapse menu" id="navbarSupportedContent">
    <ul className="navbar-nav ">
      <li className="nav-item active ">
        <Link className="nav-link active " to="Home">Home</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link active " to="About">About Us</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link active " to="ContactUs">ContactUs</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active " to="Login">Login</Link>
      </li>
    </ul>
    
  </div>
</nav>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default NavbarComp