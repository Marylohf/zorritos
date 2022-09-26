import React, {useState} from 'react'
import './Tarjeta2.css'

const Tarjeta2 = () => {

    const [count, setCount] = useState(1);

    return (
        <div className='cont-tarjeta-2'>
            <center>
                <div className="containerGlitch">
                    <p className="glitch" id="textGlitch"> ¿Quieres más zorritos? </p>
                </div>
            </center>
            <div className='cont-img-zorritos'>
                <img src={`https://randomfox.ca/images/${count}.jpg`} alt="" />
            </div>
            <button className='myButton' onClick={() => setCount(count + 1)}>Sí, quiero más</button>
        </div>
    )
}

export default Tarjeta2;