import React from 'react'
import { useState } from 'react'

const usesstate = ({value}) => {
    const [contador, setContador] = useState (value);
    const handleButtonSuma =() => {
        setContador(contador + 1)
    }
    const handleButtonResta = ()=>{
        setContador(contador - 1)
    }

  return (
    <>
        <h1>3_ useState</h1>

        <p>contador: <strong>{contador}</strong></p>
        <div>
            <button onClick = {handleButtonSuma}>Aumentar</button> 
            <button onClick={handleButtonResta}>Decrementar</button>

        </div>

    </>
  )
}

export default usesstate