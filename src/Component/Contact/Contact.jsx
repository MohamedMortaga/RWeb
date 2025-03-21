import React from "react";
import style from "./Contact.module.css";
import { Link } from "react-router-dom";
import { RiContactsFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import image1 from "../../Images/logoX.png";
import toast from "react-hot-toast";
export default function Contact() {
  return (
    <>
      <section className="p-5 m-4">
        <fieldset className={`${style.fs1} ${style.borderr} p-3 m-5`}>
          <h2 className="text-dark">
            <RiContactsFill
              style={{ verticalAlign: "middle", marginRight: "10px" }}
            />{" "}
            Contact US
          </h2>
          <div className={`${style.line2}`}></div>

          <div className="container-fluid">
          <div className="row justify-content-center">
            <form className={`col-12 col-md-8 col-lg-6 p-1 d-flex flex-column justify-content-center text-dark px-5 pt-4 ${style.bg} mb-5 mt-5 animate__animated animate__fadeInTopRight delay-1s`}>
              <img src={image1} className={`${style.ww} m-auto mb-1 `} alt="Logo" />
              <div className="form-floating w-100 mb-3">
                <input
                  type="text"
                  className="form-control border-0"
                  id="name"
                  placeholder="Enter Your Name"
                  maxLength={50}
                  minLength={10}
                  required
                />
                <label htmlFor="name" className={`${style.lab} form-label`}>
                  Name
                </label>
              </div>

              <div className="form-floating w-100 mb-3">
                <input
                  type="email"
                  className="form-control border-0"
                  id="email"
                  placeholder="Enter Your Email"
                  maxLength={50}
                  minLength={10}
                  required
                />
                <label htmlFor="email" className={`${style.lab} form-label`}>
                  Email
                </label>
              </div>

              <div className="form-floating w-100 mb-3">
                <textarea
                  className="form-control border-0"
                  id="message"
                  placeholder="Enter Your Message"
                  maxLength={500}
                  minLength={10}
                  style={{ height: "150px" }}
                  required
                ></textarea>
                <label htmlFor="message" className={`${style.lab} form-label`}>
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary mt-4 w-50 mx-auto mb-2"
                style={{ height: "50px" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>


        <fieldset className={`${style.fs1} ${style.borderr} p-3 animate__animated animate__fadeInBottomLeft delay-1s  ${style.mm}`}> 
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="text-capitalize mb-3">To get in touch : <span className='fw-bold text-primary'>Andrew Melad</span></h3>
              
              <div className="detail">
                <h4 className="text-capitalize">phone:</h4>
                <div className="d-flex">
                  <p><FaPhone className="text-primary" style={{ verticalAlign: "middle" }} /></p>
                  <p className="ps-2 text-capitalize">+20 1024096770 (Whatsapp) (Phone)</p>
                </div>
              </div>

              <div className="detail">
                <h4 className="text-capitalize">Email:</h4>
                <div className="d-flex">
                  <p><FaEnvelope className="text-primary" style={{ verticalAlign: "middle" }} /></p>
                  <p className="ps-2">andrewmelad120@gmail.com</p>
                </div>
              </div>

              <div className="social-icons">
                <div className="d-flex">
                <Link to="https://github.com/Andrew-120"  target="_blank"><FaGithub className="text-primary me-4" style={{ verticalAlign: "middle", fontSize: "25px"}} /></Link>
                <Link to="https://www.linkedin.com/in/andrew-melad-572454285/"  target="_blank"><FaLinkedin className="text-primary icon-size" style={{ verticalAlign: "middle", fontSize: "25px"}} /></Link>
                </div>
              </div>

            </div>

            <div className="col-md-6">
              <h3 className="text-capitalize mb-3">To get in touch : <span className='fw-bold text-primary'>Mohamed Mortaga</span></h3>
              
              <div className="detail">
                <h4 className="text-capitalize">phone:</h4>
                <div className="d-flex">
                  <p><FaPhone className="text-primary" style={{ verticalAlign: "middle" }} /></p>
                  <p className="ps-2 text-capitalize">+20 1022194510 (Whatsapp) (Phone)</p>
                </div>
              </div>

              <div className="detail">
                <h4 className="text-capitalize">Email:</h4>
                <div className="d-flex">
                  <p><FaEnvelope className="text-primary" style={{ verticalAlign: "middle" }} /></p>
                  <p className="ps-2">mohamedmortagalol@gmail.com</p>
                </div>
              </div>

              <div className="social-icons">
                <div className="d-flex">
                <Link to="https://github.com/MohamedMortaga"  target="_blank"><FaGithub className="text-primary me-4" style={{ verticalAlign: "middle", fontSize: "25px"}} /></Link>
                <Link to="https://www.linkedin.com/in/mohamed-mortaga-973982219/"  target="_blank"><FaLinkedin className="text-primary icon-size" style={{ verticalAlign: "middle", fontSize: "25px"}} /></Link>
                </div>
              </div>

            </div>
          </div>
        </div>
        </fieldset>

        </fieldset>
      </section>
    </>
  );
}
