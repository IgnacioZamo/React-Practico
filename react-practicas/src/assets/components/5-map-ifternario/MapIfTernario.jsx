import React, { useState } from 'react'

const Item = ({nombre, visto}) =>{
    return (
        <li>{nombre}{visto ? "👌" : "🚫"}</li>
    )
}

let arregloListado = [
    {nombre:"Celular", visto:true},
    {nombre:"PC", visto:true},
    {nombre:"Escritorio", visto:false},
    {nombre:"Mochila", visto:false},
    {nombre:"Televisor", visto:true},
    {nombre:"Tablet", visto:false}
]

const MapIfTernario = () => {
    const [arreglo, setArreglo] = useState(arregloListado)
    const [newName, setNewName] = useState('')
    const [newView, setNewView] = useState(false)
    
    const handleSetItem = ()=>{
        if(newName.trim()===''){
            alert("El campo no puede estar vacio")
            return;
        }
        setArreglo([...arreglo,{nombre:newName, visto:newView}])
        setNewName('');
        setNewView(false)
    }
    

  return (
    <>
    <h1>Listado del objetos, con MAP</h1>
    <ol>
        {arreglo.map((item,indx) => <Item key={"item-" + indx} nombre={item.nombre} visto={item.visto}/>)}
    </ol>
    <div>
        <input
        type='text'
        placeholder='Nombre de item'
        value={newName}
        onChange={(e)=> setNewName(e.target.value)}/>
        <label htmlFor="">
            <input 
            type="checkbox"
            checked={newView}
            onChange={(e) => setNewView(e.target.checked)}
            />
            Visto
        </label> <br />
        
        <button onClick={handleSetItem}>Agregar Item</button>
    </div>
    </>
  )
}

export default MapIfTernario