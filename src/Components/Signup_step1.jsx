import React, { useState } from 'react'
import { Select, Space } from 'antd'
import usePasswordToggle from '../Hooks/usePasswordToggle'
import { useNavigate } from 'react-router'

const Signup_step1 = () => {
  const [detailSection, setDetailSection] = useState(false)
  const [nextBtn, setNextBtn] = useState(true)
  const { type, icon, toggleVisibility } = usePasswordToggle()
  const navigate = useNavigate()
  const handleNext = () => {
    setDetailSection(true)
    setNextBtn(false)
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  const handleSignup = () => {
    navigate('/verify-email')
  }
  return (
    <div>
      <div className='common-auth-container'>
        <div className='[font-family:var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl self-center'>Sign Up</div>
        <div className=' [font-family:var(--font-league)] text-base sm:text-2xl font-semibold text-[#181A20]'>
          Sign up as a
        </div>
        <div className=' flex flex-col gap-[24px]'>
          <div className='pass-input relative'>
            <Select
              className='w-full border border-black rounded-[10px] h-[60px]! [font-family:var(--font-league)] pl-[48px]! pr-[16px]! py-[16px]! text-base sm:text-xl font-normal text-[#B1B1B1]focus-visible:outline-none focus-visible:border-[#5183F4] bg-none bg-white appearance-none'
              defaultValue='Select...'
              onChange={handleChange}
              options={[
                { value: 'teacher', label: 'Teacher' },
                { value: 'student', label: 'Student' },
              ]}
            />
            <img src='/Group.svg' alt='password' className='absolute top-[18px] left-[10px] z-[10]' />
            <img src='/select-arrow.svg' alt='eye' className='absolute top-[18px] right-[10px] z-[10]' />
          </div>
          {nextBtn && (
            <button onClick={handleNext} className='common-btn'>
              Next
            </button>
          )}
        </div>
        {detailSection && (
          <>
            <div className=' [font-family:var(--font-league)] text-base sm:text-2xl font-semibold text-[#181A20]'>
              Your Details
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
              <button onClick={handleSignup} className='common-btn'>
                Sign Up
              </button>
            </div>
            <div className=' justify-center items-center flex flex-col gap-[24px]'>
              <p className='text-base sm:text-xl text-[#181A20] font-normal [font-family:var(--font-league)]'>
                Already have an account?{' '}
                <a href='/' className='text-[#5183F4] font-semibold'>
                  Log In
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Signup_step1
