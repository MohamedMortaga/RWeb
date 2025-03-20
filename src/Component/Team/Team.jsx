import React from 'react'
import style from './Team.module.css'
import { FaPeopleGroup } from "react-icons/fa6";

export default function Team() {
  return <>
  <section>
  <fieldset className={`${style.fs1} ${style.borderr} p-3`}>
          <h2 className="text-dark">
            <FaPeopleGroup style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Our Team
          </h2>
        </fieldset>
  </section>
 
  </>
}
