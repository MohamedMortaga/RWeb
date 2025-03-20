import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import 'animate.css';

export default function Navbar() {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-light fixed-top animate__animated animate__fadeInDown ${style.navb}`}>
        <div className="container-fluid">
          <Link className="navbar-brand text-dark animate__animated animate__shakeX animate__delay-1s" to="">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active animate__animated animate__fadeInLeft animate__delay-2s" to="">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link animate__animated animate__fadeInLeft animate__delay-3s" to="about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link animate__animated animate__fadeInLeft animate__delay-4s" to="services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link animate__animated animate__fadeInLeft animate__delay-5s" to="team">Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link animate__animated animate__fadeInLeft animate__delay-6s" to="contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
