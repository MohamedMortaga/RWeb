import React from 'react';
import style from './Services.module.css';
import 'animate.css';
import { FaCogs } from "react-icons/fa";
import img1 from '../../Images/service-1.jpg';
import img2 from '../../Images/service-2.jpg';
import img3 from '../../Images/service-3.jpg';


const images = [img1, img2, img3];

export default function Services() {
  return <>
    <section className="p-5 m-4">
      <fieldset className={`${style.fs1} ${style.borderr} p-3 m-5`}>
        <h2 className="text-dark">
          <FaCogs style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Our Services
        </h2>
        <div className={`${style.line2} mb-3`}></div>

        
        <div id="serviceCarousel" className="carousel slide" data-bs-ride="carousel">
          
          
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#serviceCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

        
          <div className="carousel-inner">
            {images.map((img, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img 
                  src={img} 
                  className="d-block w-100 img-fluid slider-image" 
                  alt={`Service ${index + 1}`} 
                  style={{ objectFit: "cover", maxHeight: "500px" }} // Maintain aspect ratio
                />
              </div>
            ))}
          </div>

          
          <button className="carousel-control-prev" type="button" data-bs-target="#serviceCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#serviceCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </fieldset>
    </section>
  </>;
}
