import React, { useState } from 'react';
import axios from 'axios';

export default function User() {
  const [users, setUsers] = useState([]);

 const handleClick = () => {
    axios.get('http://localhost:3000/api/v1/users')
      .then((response)=>{
        setUsers([...users,response.data]);
        console.log(response.data);
      })
      .catch(console.log("err"))
  }

  return (
    <div>
      <h1>Users</h1>
      {/* <h1>The users are: {users}</h1> */}
      <form action=""></form>
      <button onClick={handleClick}>Click to get users</button>
      {users.data && users.data.map((user) => (
        <p>Hello, {user.name} with id number {user.id}!</p>
      ))}
    </div>
  )
}
