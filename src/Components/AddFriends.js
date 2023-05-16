import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AddFriend = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name:'',
        age:'',
        email:''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        axios.post('http://localhost:3000/api/friends', form, {
            headers: {
                authorization: token
            }
        })
        .then(res => {
            navigate('/friends')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (<div>
            <h1>Add Friend</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor='name'>Name:</label>
                <input id="username" name="name"/>
              </div>
        
              <div>
              <label htmlFor='age'>Friend Age</label>
              <input id='age' name="age"/>
            </div>

            <div>
              <label htmlFor='email'>Friend Email</label>
              <input id='email'/>
            </div>


            <button>Submit</button>
            </form>
          </div>)
  }

  export default AddFriend