import React, { useEffect, useState } from 'react'
import style from './Team.module.css'
import { FaPeopleGroup } from "react-icons/fa6";
import axios from 'axios';
import 'animate.css';

export default function Team() {
  const [team, setTeam] = useState([]);

  async function getTeam() {
    let {data} = await axios.get('https://api.sampleapis.com/presidents/presidents')
    console.log(data);
    setTeam(data)
  }

  useEffect(() => {
    getTeam()
  }, [])

  return <>
  <section className='p-5'>
  <fieldset className={`${style.fs1} ${style.borderr} p-3  m-5`}>
          <h2 className="text-dark">
            <FaPeopleGroup style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Our Team
          </h2>

          <div className="container animate__animated animate__zoomIn delay-1s">
            <div className="row">
              {team.slice(0, 4).map((item) => <div className="col-md-3" key={item.id}>
                <img src={item.photo} alt={item.name} className='img-fluid w-100 rounded rounded-4 border border-3 border-primary mt-2' style={{ height: '450px', objectFit: 'cover' }} />

                <h3 className='text-center mt-1'>{item.name}</h3> <p className='text-center text-primary'>{item.yearsInOffice}</p> </div>)}
            </div>
          </div>
  </fieldset>
  </section>
 
  </>
}
