import React from 'react'

const Item = ({nombre, visto}) =>{
    return (
        <li>{nombre}{visto ? "👌" : "🚫"}</li>
    )
}

const IfTernario = () => {
  return (
    <>
        <ul>
            <Item nombre="Celular" visto={true}/>
            <Item nombre="PC" visto={true}/>
            <Item nombre="Escritorio" visto={false}/>
            <Item nombre="Mochila" visto={false}/>
            <Item nombre="Televisor" visto={true}/>
            <Item nombre="Tablet" visto={false}/>
        </ul>
    </>
  )
}

export default IfTernario