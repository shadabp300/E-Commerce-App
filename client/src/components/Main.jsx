import React from 'react'
import { useNavigate } from 'react-router-dom'



const Main = () => {

  const navigate=useNavigate()

  const handlelogout=()=> {
    localStorage.setItem("authorization", '')
    navigate('/')
  }


  return (
    <div><button onClick={handlelogout}>Logout</button></div>
  )
}

export default Main