import React from 'react'
import './Tarjeta.css'

const Tarjeta = ({num}) => {

  return (
    <div className='contenedor-zorritos'>
        <img src={`https://randomfox.ca/images/${num}.jpg`} alt="" />
    </div>
  )
}

export default Tarjeta;


