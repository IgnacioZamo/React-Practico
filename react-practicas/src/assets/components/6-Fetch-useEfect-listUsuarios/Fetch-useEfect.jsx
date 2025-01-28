import { useState, useEffect } from "react"

const FetchUseEfect = () => {

const [users, setUser] = useState([])

const fetchUsers = async ()=> {
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        setUser(data)
        
      } catch (error) {
        console.error(error)
      }
    }
    useEffect(() => {
      fetchUsers();
    }, [])
  
  return (
    <div>
      <h1>Fetch - useEfect</h1>
      <ol>
        {users.map(user => <li key={user.id}>{user.name} | {user.address.zipcode}</li>)}
      </ol>
    </div>
  )
}

export default FetchUseEfect