import React from 'react'
import AuthBar from '../Components/AuthBar'
import usePasswordToggle from '../Hooks/usePasswordToggle'
import CustomButton from '../Components/ui/CustomButton'
import CustomInput from '../Components/ui/CustomInput'
const LoginScreen = () => {
  const { type, icon, toggleVisibility } = usePasswordToggle()

  return (
    <>
      <AuthBar />
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
              <CustomInput type='text' placeholder='Email' />
              <img src='/mail.svg' alt='email' className='absolute top-[15px] left-[10px]' />
            </div>
            <div className='pass-input relative'>
              <CustomInput type={type} placeholder='Password' />
              <img src='/key1.svg' alt='password' className='absolute top-[15px] left-[10px]' />
              <img onClick={toggleVisibility} src={icon} alt='eye' className='absolute top-[15px] right-[10px]' />
            </div>
            <CustomButton text='Log In' onClick={() => console.log('prop passed')} className='' />
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
    </>
  )
}

export default LoginScreen
