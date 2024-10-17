import React from 'react'
import Input from './SearchInputForm'

//(e.target.value) = (searchPattern)
const ListView = ({elements, functionFilteredItem}) => {
  return (
    <div>
      <Input functionFilteredItem={functionFilteredItem}/>
        <ul>
        {
            elements.map((items,index) => <li key={index}>{items}</li>)
        }
        </ul>
    </div>
  )
}

export default ListView 