import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Acerca de</Link></li>
        <li><Link to="/footer">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar