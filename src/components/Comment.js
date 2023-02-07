import React from 'react';
import '../stylesheets/Comentario.css'

function Comentario(props){   //función de javascript
  return(
    <div className='contenedor-comentario'>
      <img 
      className='imagen-comentario'
      src= {require(`../images/comment - ${props.imagen}.jpg`)}
      alt='Foto de Bill'   //atributo para accesibilidad
      />

      <div className='contenedor-text-comentario'>

        <p className='nombre-comentario'>Comentarios de 
        <strong> {props.nombre} </strong> 
        en {props.pais}
        </p>
        
        <p className='cargo-comentario'>{props.cargo} de 
        <strong> {props.empresa} </strong>
        </p>
        
        <p className='texto-comentario'>"{props.comentario}"</p>
      
      </div>

    </div>
  );//un componente funcional retorna un elemento jsx
}

export default Comentario; //exportacion por defecto, si lo hacemos asi solo podemos exportar uno, en este caso el componente Comentario 
                            //export function Comentario(), exportacion nombrada, podemos tener varias exportaciones