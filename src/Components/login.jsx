import React from 'react'
import usePasswordToggle from '../Hooks/usePasswordToggle'

const Login = () => {
  const { type, icon, toggleVisibility } = usePasswordToggle()
  return (
    <div>
      <div className='common-auth-container'>
        <div className='[font-family:var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl self-center'>
          Welcome Back
        </div>
        <div className='[font-family:var(--font-league)] text-base sm:text-xl font-normal text-[#717171] self-center'>
          Log In to explore the world of tutors
        </div>
        <div className='flex flex-col gap-[24px]'>
          <div className='email-input relative'>
            <input type='text' placeholder='Email' className='common-inputs' />
            <img src='/mail.svg' alt='email' className='absolute top-[15px] left-[10px]' />
          </div>
          <div className='pass-input relative'>
            <input type={type} placeholder='Password' className='common-inputs ' />
            <img src='/key1.svg' alt='password' className='absolute top-[15px] left-[10px]' />
            <img onClick={toggleVisibility} src={icon} alt='eye' className='absolute top-[15px] right-[10px]' />
          </div>
          <button className='common-btn'>Log In</button>
        </div>
        <div className='justify-center items-center flex flex-col gap-[24px]'>
          <a
            href='/forgot-password'
            className='[font-family:var(--font-league)] text-[#5183F4] font-semibold text-base sm:text-xl '>
            I forgot my password
          </a>
          <p className='text-base sm:text-xl text-[#181A20] font-normal [font-family:var(--font-league)] flex flex-col sm:flex-row gap-1 items-center'>
            Don’t you have an account?{' '}
            <a href='/signup-step-1' className='text-[#5183F4] font-semibold'>
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
