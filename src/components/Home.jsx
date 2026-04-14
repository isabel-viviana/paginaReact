import React from 'react'
import './Home.css'
import Aside from "./Aside";

export const Home = () => {
  return (
    <div className='home'>
      <main className='main-content'>
        <div className='card'>
        <h1>que es react</h1>
        <p>React es una de las librerías más influyentes en el desarrollo moderno de interfaces web. Creada por Meta, su propuesta se centra en facilitar la construcción de interfaces de usuario a través de componentes reutilizables y un enfoque declarativo que simplifica la forma en que los desarrolladores interactúan con el DOM.</p>

        <p>Según su documentación oficial, React permite describir cómo debe verse la interfaz en cada estado de la aplicación, delegando en la librería la tarea de actualizar eficientemente el DOM mediante el uso del Virtual DOM. Este enfoque no solo mejora el rendimiento, sino que también reduce la complejidad del código, haciendo que las aplicaciones sean más predecibles y fáciles de mantener.</p>

        <p>Sin embargo, la documentación también deja ver que React no es una solución completa por sí sola. Al enfocarse únicamente en la capa de vista, obliga a los desarrolladores a apoyarse en herramientas externas para aspectos como el enrutamiento o la gestión de estado global. Esto puede ser una ventaja en términos de flexibilidad, pero también añade complejidad, especialmente para quienes están comenzando.</p>

        <h2>reseña de react</h2>
        <p>React es una de las librerías más importantes del desarrollo web moderno. Creada por Meta, destaca por permitir la construcción de interfaces de usuario mediante componentes reutilizables y un enfoque declarativo que simplifica la programación.</p>

        <p>Su principal aporte es el Virtual DOM, que optimiza las actualizaciones de la interfaz y mejora el rendimiento de las aplicaciones. Gracias a esto, React ofrece experiencias más rápidas y fluidas incluso en proyectos complejos.</p>

        <p>Aunque no es una solución completa por sí misma, ya que necesita herramientas externas para funciones como el enrutamiento o la gestión de estado, su flexibilidad y gran ecosistema la han convertido en una opción clave para el desarrollo frontend actual.</p>
        
        </div>
      </main>
      <Aside />
    </div>
  )
}

export default Home
