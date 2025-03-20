import React from 'react';
import { FaHome } from 'react-icons/fa';
import style from './Home.module.css';
import homeImage from '../../Images/Home.jpg'; 
import 'animate.css';
import About from '../About/About';
import Services from '../Services/Services';
import Team from '../Team/Team';

export default function Home() {
  return <>
    <section>
      <fieldset className={`${style.fs1 }`}>

        <div
          className={`${style.caption} d-flex justify-content-center align-items-center text-center flex-column 100vh`}
          style={{
            minHeight: '100vh',
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.768), rgba(0, 0, 0, 0.768)), url(${homeImage})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        >
          <article>
            <h1 className={`${style.htitle} text-center`}>We are a </h1>
            <p className={`${style.ptitle} text-center pt-3 animate__animated animate__fadeInDown`}>
              Bachelor of Computer Science | Modern Sciences and Arts University (MSA) | Greenwich University.
            </p>
          </article>
        </div>
      </fieldset>
    </section>
    <About/>
    <Services/>
    <Team/>

  </>
}
