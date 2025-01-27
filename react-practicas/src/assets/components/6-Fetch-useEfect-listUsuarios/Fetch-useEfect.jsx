import { useState } from "react"

useState

const FetchUseEfect = () => {

const [user, setUser] = useState([])

const fetchUsers = async ()=> {
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/users')
        const data = response.json();
        console.log(data)
        setUser(data)
        
    } catch (error) {
        console.error(error)
    }
}


  return (
    <div>Fetch-useEfect</div>
  )
}

export default FetchUseEfect