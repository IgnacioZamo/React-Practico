import React from 'react'
import { useState, useEffect } from 'react'

const CountDown = () => {
    let [targetSecond, setTargetSecond] = useState(null) //tiempo establecido por el usuario
    let [elapsedSeconds, setElapsedSeconds] = useState(0) //tiempo transcurrido


    useEffect(function(){
        if ( targetSecond ===null ) return

        //targetSecond no es null, entonces tiene un valor ↓
        setElapsedSeconds(0)
        let interval = setInterval(function() {   //lo guardamos en una variable para despues poder limpiarlo
            setElapsedSeconds((elapsedSeconds)=>elapsedSeconds + 1) }, 1000)

            return () =>{
                clearInterval(interval); //Se debe devolver una funcion para limpieza del intervalo, sino se bugea
            }
    }, [targetSecond])



    //funcion que toma la cantidad de segundos tipados por el usuario:
    const handleCount = (e)=>{
        e.preventDefault();
        let seconds = e.target.second.value;  //e.target.second => hace referencia al input cuyo name='second'; value => valor
        setTargetSecond(seconds) 

    }

    const handleHome = ()=>{setTargetSecond(null)};

    if(elapsedSeconds >= targetSecond && targetSecond !== null) {
        return(
        <>
            <p>¡Cuenta finalizada!</p>
            <button onClick={handleHome}>Regresar</button>
        </>
        )
    }
      //if en el cual declaro si targetSecond deja de ser nulo (es decir, el usuario inició el cronometro), el interfaz cambiará
  
      if(targetSecond !== null){
        return  (
                <>
                    <p>Usted ha elegido {targetSecond} segundos!</p>
                    <h4>{elapsedSeconds}</h4>
                </>
            )
        }

    
    return (
        <>
        <p>Introduce la cantidad de segundos que quieres contar:</p>
        <form action="#" onSubmit={handleCount}>
            <input type="number" name='second'/>
            <button>Iniciar!</button>
        </form>
        </>
    )


}

export default CountDown
