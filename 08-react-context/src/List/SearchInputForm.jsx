import React from 'react'

const SearchInputForm = ( {functionFilteredItem} ) => {
  return (
    <input type="text" onChange={e =>functionFilteredItem(e.target.value)}/>
  )
}

export default SearchInputForm