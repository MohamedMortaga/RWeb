import React from 'react';
import style from './Services.module.css';
import { FaCogs } from "react-icons/fa";

export default function Services() {
  return<>
   <section className='vh-100 overflow-auto'>
    <fieldset className={`${style.fs1} ${style.borderr} p-3`}>
            <h2 className="text-dark">
              <FaCogs style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Our Services
            </h2>
          </fieldset>
    </section>
  </>
}
