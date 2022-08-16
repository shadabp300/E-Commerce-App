import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './components/signup'
import Signin from './components/signin'
import Main from './components/Main'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/main' element={<Main/>}/>

      {/* <Route element={<Private/>}>
        <Route path='/table' element={<Table/>}></Route>
        </Route> */}
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
