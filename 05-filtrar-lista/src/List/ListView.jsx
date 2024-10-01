import React from 'react'

//(e.target.value) = (searchPattern)
const ListView = ({elements, functionFilteredItem}) => {
  return (
    <div>
        <input type="text" onChange={e =>functionFilteredItem(e.target.value)}/>
        <ul>
        {
            elements.map((items,index) => <li key={index}>{items}</li>)
        }
        </ul>
    </div>
  )
}

export default ListView 