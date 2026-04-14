import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <h2>React</h2>
        <ul className='nav-links'>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Acerca de</Link></li>
          <li><Link to="/footer">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar