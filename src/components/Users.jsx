import { useEffect, useState } from 'react'

const Users = () => {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
  return (
    <div>
        {users.map((user)=>(
            <div key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        ))}
    </div>
  )
}

export default Users