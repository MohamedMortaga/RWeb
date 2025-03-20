import React from 'react'
import style from './Footer.module.css'
import 'animate.css';
import image1 from '../../Images/logoX.png'
export default function Footer() {
  return <>
     <footer className={` animate__animated  animate__fadeInUp text-dark text-center p-1 ${style.foot}`}>
      <div className='border-top rounded'>
        <h1 className="text-center lg"> <img src={image1} className={`${style.ww}`} alt="Logo" /></h1>
        <p>Copyright © 2025 Designed by <span className='fw-bold text-primary'>Mohamed Mortaga</span> & <span className='fw-bold text-primary'>Andrew Melad</span>.</p>
        <p>All rights reserved.</p>
       
      </div>
    </footer>
  </>
  
}
