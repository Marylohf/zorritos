import React from 'react'
import Dni from '../Dni/Dni';
import Tarjeta from '../Tarjeta/Tarjeta';
import Tarjeta2 from '../Tarjeta2/Tarjeta2';
import './Main.css'

const Main = () => {
  
  let array = []

  for (let i = 0; i < 5; i++) {
    array.push(Math.floor(Math.random() * (0 - 129)) + 129)
  }

  const handlePrint = () => {
    console.log('hola')
    return array.map((a,b) => <Tarjeta num={array[b]} />)
  }

  return (
    <div className='contenedor-principal'>
        <h2>Los zorritos del día son:</h2>
        <Dni nombre={"Maryló"} edad={"22"}/>
        <Dni nombre={"Ruru"} edad={"2"}/>
        <div className='cont-zorritos'>
          {handlePrint()}
        </div>
        <Tarjeta2 />

    </div>
  )
}

export default Main;