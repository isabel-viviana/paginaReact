import React from 'react'
import m1 from "../assets/m1.jpg";
import './Aside.css'

const Aside = () => {
  return (
    <aside className="aside">
      <div className='aside-card'>
        <img src={m1} alt="imagen" className="m1-img"/>
        <h3>React info</h3>
        <p>react permite crear interfaces dinamicas de manera eficiente usando componentes</p>
      </div>
    </aside>
  )
}

export default Aside