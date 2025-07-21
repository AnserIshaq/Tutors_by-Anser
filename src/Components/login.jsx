import React from 'react'
import AuthBar from './AuthBar'

const Login = () => {
  return (
    <div className='login'>
      <div className='login--inner flex flex-col border border-black'>
        <div className='login-heading'>Welcome Back</div>
        <div className='login-desc'>Log In to explore the world of tutors</div>
        <div className='login-inputs'>
          <input type='text' placeholder='Email' name='' id='' className='w-full border border-black' />
          <input type='text' placeholder='Password' name='' id='' className='w-full border border-black' />
          <button className='w-full border border-black'>Log In</button>
        </div>
        <div className='login-footer justifu-center items-center flex flex-col'>
          <p>I forgot my password</p>
          <p>Don't you have an account? SignuP</p>
        </div>
      </div>
    </div>
  )
}

export default Login
