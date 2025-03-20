import React from 'react'
import style from './Contact.module.css'
import { RiContactsFill } from "react-icons/ri";

export default function Contact() {
  return<>
   <section>
    <fieldset className={`${style.fs1} ${style.borderr} p-3`}>
            <h2 className="text-dark">
              <RiContactsFill style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Contact US
            </h2>
          </fieldset>
    </section>
  </>
}
