import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return <>
     <footer className={`text-dark text-center p-1 ${style.foot}`}>
      <div className='border-top rounded'>
        <h1 className="text-center lg">Footer</h1>
        <p>Copyright © 2025 Designed by Mohamed Mortaga & Andrew Melad.All rights reserved.</p>
       
      </div>
    </footer>
  </>
  
}
