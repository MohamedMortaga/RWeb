import React from 'react';
import style from './Services.module.css';
import { FaCogs } from "react-icons/fa";

export default function Services() {
  return (
    <>
      <fieldset className={`${style.fs1} ${style.borderr} p-3`}>
        <h1 className="text-dark">
          <FaCogs style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Services
        </h1>
      </fieldset>
    </>
  );
}
