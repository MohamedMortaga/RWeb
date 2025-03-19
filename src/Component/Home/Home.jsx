import React from 'react';
import { FaHome } from 'react-icons/fa';
import style from './Home.module.css';

export default function Home() {
  return (
    <>
      <fieldset className={`${style.fs1} ${style.borderr} p-3`}>
        <h1 className="text-dark">
          <FaHome style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Home
        </h1>
      </fieldset>
    </>
  );
}