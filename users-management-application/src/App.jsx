
import { useEffect, useState } from 'react'
import './App.css'
import User from './Components/User'
import PostApi from './Components/PostApi'

function App() {
  


  const [users,setUsers]= useState([])



  useEffect(()=>{


    fetch("http://localhost:5005/users")
    .then(res=>res.json())
    .then(data=>setUsers(data))

  },[users])



  return (
    <>
   
      <h1>User Management Application</h1>


      {
        users.map(user=><User key={user.id} user= {user}></User>)
      }


      <PostApi></PostApi>
    </>
  )
}

export default App
