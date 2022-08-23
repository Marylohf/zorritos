import React from 'react'
import Dni from '../Dni/Dni';
import Tarjeta from '../Tarjeta/Tarjeta';

const Main = () => {
  
  let baseUrl = "https://randomfox.ca/images/"
  let array = []
  let ext = '.jpg'
  // let finalUrl = `${baseUrl}${random}${extension}`

  for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * (0 - 129)) + 129)
  }

  const handlePrint = () => {
    array.map((a,b) => `<p>${a}</p>`)
  }

  // <Tarjeta number={array[b]} key={b}/>
  console.log(array)
  console.log(handlePrint())

  return (

    <div className='contenedor-principal'>
        <h2>Los zorritos del día son:</h2>
        <Dni nombre={"Maryló"} edad={"22"}/>
        <Dni nombre={"Ruru"} edad={"2"}/>
        {/* <Tarjeta url={`${baseUrl}${random}${extension}`}/> */}
        {handlePrint()}
    </div>
  )
}



export default Main;