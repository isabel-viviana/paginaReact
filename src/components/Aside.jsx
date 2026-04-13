import React from 'react'
import m1 from "../assets/m1.jpg";
import './Aside.css'

const Aside = () => {
  return (
    <div>
        <aside className="aside">
          <img src={m1} alt="imagen" className="m1-img"/>
        </aside>
    </div>
  )
}

export default Aside