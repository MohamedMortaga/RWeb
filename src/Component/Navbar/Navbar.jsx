import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import 'animate.css';
import image1 from '../../Images/logoX.png';
export default function Navbar() {
  return (
    <>
      <nav className={`vv navbar navbar-expand-lg navbar-dark bg-dark animate__animated animate__fadeInDown  ${style.navb}`}>
        <div className="container-fluid">
          <Link className="navbar-brand text-dark animate__animated animate__shakeX animate__delay-1s" to="">
          <img src={image1} className={`${style.ww}`} alt="Logo" />
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active animate__animated animate__fadeInLeft animate__delay-1s" to="">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link animate__animated animate__fadeInLeft animate__delay-2s" to="about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link animate__animated animate__fadeInLeft animate__delay-3s" to="services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link animate__animated animate__fadeInLeft animate__delay-4s" to="team">Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link animate__animated animate__fadeInLeft animate__delay-5s" to="contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
