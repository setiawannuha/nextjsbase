'use client'
import React, {useState} from 'react'

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  const onChangeInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(form);
  }
  return (
    <div>
      <h1 className="text-2xl font-semibold">Login</h1>
      <form action="" method='POST' onSubmit={handleSubmit}>
        <div className='p-1'>
          <label htmlFor="email">email</label>
          <br />
          <input type="email" onChange={onChangeInput} className='text-black' name="email" placeholder="email" />
        </div>
        <div className='p-1'>
          <label htmlFor="password">password</label>
          <br />
          <input type="password" onChange={onChangeInput} className='text-black' name="password" placeholder="password" />
        </div>
        <div className='p-1'>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login