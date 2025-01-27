import React from 'react'
const string = "hola mundo";
const number = 123;
const array = ["hola","jaja", 123,[2,"hola"]]
const objeto = {nombre:"Nacho",apellido:"zamo", edad:30}
const funcion = ()=>"hola mundo, 2+2 es igual a: " + (2+2);


const Constantes = () => {
  return (
    <div>
      <h1>1_ tipos de contantes y variables</h1>
          <h3>{string}</h3>
          <p>variable numero: {number}</p>
          <p>{funcion()}</p>
          <p>dentro del array, puesto 2, hay: {array[2]}, tambien hay: {array[3][1]}</p>
    </div>
  )
}

export default Constantes;
