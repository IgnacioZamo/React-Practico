import React, { useState } from 'react'
import FrameWorkList from './items.js'
import ListView from './ListView.jsx'

const List = () => {
  let [items, setItems] = useState(FrameWorkList)


//funcion que identifica si el 'patron de busqueda' está vacio o no
  const filterItems = (searchPattern) =>{
    if (searchPattern===""){
      setItems(FrameWorkList);
    }else {
      let newItems = filteredItemsBySearchPattern(searchPattern)
      setItems(newItems)
    }
  }

  //funcion que filtra el la lista inicial con el patron de busqueda
  const filteredItemsBySearchPattern = (searchPattern)=>{
    let filteredItems = FrameWorkList.filter(items => items.toLocaleLowerCase().includes(searchPattern))
    return filteredItems
  }


  return (
    <div>
      <ListView elements={items} functionFilteredItem={filterItems}/>
    </div>
  )
}

export default List