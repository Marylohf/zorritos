import React from 'react'
import './Dni.css';


const Dni = ({nombre, edad}) => {
  return (
    <div className="elDni">
        <p className='patata'>Mi nombre es: {nombre}</p>
        <p>Mi edad es: {edad}</p>
    </div>
  )
}

export default Dni;