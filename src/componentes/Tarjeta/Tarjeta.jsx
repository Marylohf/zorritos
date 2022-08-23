import React from 'react'
import './Tarjeta.css'

const Tarjeta = (number) => {



  return (
    <div className='contenedor-zorritos'>
        <img src={"https://randomfox.ca/images/${number}.jpg"} alt="" />
    </div>
  )
}

export default Tarjeta;


