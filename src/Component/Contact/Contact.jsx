import React from "react";
import style from "./Contact.module.css";
import { RiContactsFill } from "react-icons/ri";
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
            <form className={`col-12 col-md-8 col-lg-6 p-1 d-flex flex-column justify-content-center text-dark px-5 pt-4 ${style.bg} mb-5 mt-5`}>
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
          
        </fieldset>
      </section>
    </>
  );
}
