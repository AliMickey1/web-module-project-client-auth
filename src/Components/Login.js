import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const Login = () => {
    const navigate = useNavigate()
    const [cred, setCred] = useState({
        username:"",
        password:""
    })

    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.value]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        axios.post("http://localhost:3000/api/login", cred)
            .then(res => {
                localStorage.setItem("token", res.data.payload)
                navigate('/friends')
            })
            .catch(err=> {
                console.log(err)
            })
    }

    return (<div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input onChange={handleChange} name="username" id="username"/>
        </div>
  
      <div>
        <label htmlFor='password'>Password</label>
        <input onChange={handleChange} type='password' id='password'/>
      </div>
      <button>Submit</button>
      </form>
    </div>)
  }


  export default Login;