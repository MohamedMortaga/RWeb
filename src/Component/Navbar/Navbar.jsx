import React from 'react'
import{ Link } from 'react-router-dom'
import style from './Navbar.module.css'
import 'animate.css';
export default function Navbar() {
  return <>
  
  <nav className={` animate__animated  animate__fadeInDown navbar navbar-expand-lg navbar-dark bg-dark ${style.navb}`}>
  <div className="container-fluid">
    <Link className="navbar-brand text-dark" to="">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="team">Team</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
  </nav>




  </>
  
}
