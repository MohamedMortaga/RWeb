import React, { useEffect, useState } from 'react';
import style from './Team.module.css';
import { FaPeopleGroup } from "react-icons/fa6";
import axios from 'axios';
import 'animate.css';

export default function Team() {
  const [team, setTeam] = useState([]);

  async function getTeam() {
    try {
      let { data } = await axios.get('https://api.sampleapis.com/presidents/presidents');
      console.log(data);
      setTeam(data);
    } catch (error) {
      console.error('Error fetching team data:', error);
    }
  }

  useEffect(() => {
    getTeam();
  }, []);

  return (
    <section className='p-5 m-4'>
      <fieldset className={`${style.fs1} ${style.borderr} p-3 m-5`}>
        <h2 className="text-dark">
          <FaPeopleGroup style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Our Team
        </h2>
        <div className={`${style.line2} mb-3`}></div>
        <div className="container animate__animated animate__zoomIn animate__delay-1s">
          <div className="row">
            {team.slice(0, 4).map((item) => (
              <div className="col-md-3 mb-5" key={item.id}>
                <div className={`${style.card} mt-2 mb-5 rounded rounded-4 border border-1 border-primary p-2`} >
                  <img 
                    src={item.photo} 
                    alt={item.name} 
                    className={`img-fluid w-100 rounded rounded-4  border border-3 border-primary`}
                    style={{ objectFit: 'cover' }}
                  />
                  <h3 className={`${style.dd} text-center mt-1`}>{item.name}</h3>
                  <p className='text-center text-primary'>{item.yearsInOffice}</p>
                  <p className={`${style.carddetails} text-light text-center p-4 ${style.tt}`}> <br/><h2>Here The Description : </h2>The World Wide Web—commonly referred to as WWW, W3, or the Web—is a system of interconnected public webpages accessible through the Internet. The Web is not the same as the Internet: the Web is one of many applications built on top of the Internet.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </fieldset>
    </section>
  );
}