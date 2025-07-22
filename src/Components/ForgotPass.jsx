import React from 'react'
import { useNavigate } from 'react-router'

const ForgotPass = () => {
  const navigate  = useNavigate()

  const handleSendOtp = () => {
    navigate('/verify-otp')
  }
  return (
    <>
      <div>
        <div className=' common-auth-container'>
          <div className=' [font-family:var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl self-center'>
            Forgot Password
          </div>
          <div className=' [font-family:var(--font-league)] text-base sm:text-xl font-normal text-[#717171] self-center'>
            Enter your Email to reset the password{' '}
          </div>
          <div className=' flex flex-col gap-[24px]'>
            <div className='email-input relative'>
              <input
                type='text'
                placeholder='Email'
                className='common-inputs'
              />
              <img src='/mail.svg' alt='email' className='absolute top-[15px] left-[10px]' />
            </div>
            <button
              onClick={handleSendOtp}
              className='common-btn'>
              Send OTP
            </button>
          </div>
          <div className=' justify-center items-center flex flex-col gap-[24px]'>
            <a href='/' className='[font-family:var(--font-league)] text-[#5183F4] font-semibold text-base sm:text-xl '>
              Back to Log In
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPass
