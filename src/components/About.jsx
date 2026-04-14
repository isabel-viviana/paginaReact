import React from 'react'
import './About.css'

export const About = () => {
  return (
    <div className='about'>
        <div className='about-card'>
            <h1>historia y evolucion</h1>
            <p>
                React fue desarrollado por Meta y lanzado en 2013 como una solución a los problemas 
                de rendimiento y mantenimiento en aplicaciones web grandes, como las de Facebook. 
                Su principal aporte fue el uso del <strong>Virtual DOM</strong>, que optimiza las 
                actualizaciones de la interfaz.
            </p>

            <p>
                En sus primeros años, React destacó por introducir conceptos como <strong>JSX</strong> 
                y el enfoque declarativo. Aunque al inicio generó críticas, rápidamente ganó popularidad 
                por facilitar la creación de interfaces mediante componentes reutilizables.
            </p>

            <h2>Momentos clave en su evolución</h2>
            <ul className='timeline'>
                <li><strong>2013:</strong> Lanzamiento oficial de React.</li>
                <li><strong>2016-2018:</strong> Consolidación y adopción en la industria.</li>
                <li><strong>2019:</strong> Introducción de los Hooks.</li>
                <li><strong>Actualidad:</strong> Nuevas mejoras como renderizado concurrente y Server Components.</li>
            </ul>

            <p>
                Gracias a estas mejoras, React se mantiene como una de las principales herramientas 
                de desarrollo frontend, compitiendo con otras tecnologías modernas.
            </p>
        </div>
        
    </div>
    )
}

export default About
