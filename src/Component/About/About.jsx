import React from 'react'
import style from './About.module.css'
import img1 from '../../Images/3.png'
import 'animate.css';
import { MdInfo } from 'react-icons/md';
export default function About() {
  return <>
    <section className='text-dark vh-100 p-5 mt-5'>
        <fieldset className={` animate__animated  animate__pulse ${style.fs1} ${style.borderr} p-3  m-5`}>
            <h2>
            <MdInfo style={{ verticalAlign: 'middle', marginRight: '10px' }} />
            About:
            </h2>  
            <div className='d-flex'>
                <p className={ ` animate__animated animate__fadeInLeft ${style.borderr} ${style.pa} w-50` }>A freelancing web developers team website showcases the skills and creativity of independent professionals passionate about building exceptional online experiences. It features a sleek interface with a portfolio of projects like responsive e-commerce platforms and custom applications, highlighting expertise in technologies such as React and Node.js. Bold section icons—like a house for "Home" and an envelope for "Contact"—enhance navigation. The site offers insights into the team’s process, profiles, and trends, inviting businesses to connect for innovative, tailored solutions.</p>
                <img src={img1}  className={` animate__animated animate__fadeInRight ${style.imgabout} ${style.imm} w-50`} alt="web development" />
                
            </div>
            </fieldset>
    </section>
  </>
  
}
