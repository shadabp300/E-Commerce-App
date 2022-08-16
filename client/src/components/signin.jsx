import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'




const Signin = () => {

  let navigate=useNavigate()

    const [data, setdata]=useState({
        email:"",
        password:"",
    })


    const handlesubmit = (e) => {
        e.preventDefault()
        axios({
            method:'POST',
            headers:{
                // auth: localStorage.setItem('user')
            },
            url:"http://localhost:3001/user/login",
            data:data
        }).then((token)=> {
            localStorage.setItem("Token",token.data)
             navigate("/main")
        }).catch((err)=> {
            console.log(err)
             window.alert(err.response.data)
        })
    }
    


  return (
    <div> 
     
      
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handlesubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?
              <NavLink to="signup"> 
              <span className="link-primary" >
                Sign Up
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
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
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
    

    </div>
  )
}

export default Signin