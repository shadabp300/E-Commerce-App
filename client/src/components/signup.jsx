import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import './signup.css'



const Signup= (props) => {

     let navigate=useNavigate()
  
    const [data, setdata]=useState({
      email:"",
      phone:"",
      password:""
     
  })

  const handleclick =(e)=> {
    e.preventDefault()
    

    axios({
        method:"POST",
        url:"http://localhost:3001/user/register",
        data:data
    }).then((user)=> {
      window.alert(user.data)
      navigate('/')
    }).catch((err)=> {
        window.alert(err.response.data)
    })

  }



    return (
      <div className="Auth-form-container">
         
        <form className="Auth-form" onSubmit={handleclick}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Already registered?
              <NavLink to="/"> 
              <span className="link-primary">
                Sign In
              </span>
              </NavLink>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="eg : test123@gmail.com"
                name="email"
                onChange={(e)=> {
                  setdata({...data,email:e.target.value})
              }}
              />
            </div>
            <div className="form-group mt-3">
              <label>Phone Number</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Mobile Number"
                name="phone"
                onChange={(e)=> {
                  setdata({...data,phone:e.target.value})
              }}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                name="password"
                onChange={(e)=> {
                  setdata({...data,password:e.target.value})
              }}
              />
            </div>
            
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot password?
            </p>
          </div>
        </form>
      </div>
    )
  }
  
  export default Signup
  
  