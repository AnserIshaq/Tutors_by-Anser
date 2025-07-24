import React from 'react'
import AuthBar from '../Components/AuthBar'
import usePasswordToggle from '../Hooks/usePasswordToggle'
import {CustomButton} from '../Components/ui/CustomButton'
import CustomInput from '../Components/ui/CustomInput'
import TopBar from '../Components/TopBar'
const LoginScreen = () => {
  const { type, icon, toggleVisibility } = usePasswordToggle()

  return (
    <>
      {/* <AuthBar /> */}
      <TopBar/>
      <div>
        <div className='common-auth-container'>
          <div className='[font-family:var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl self-center'>
            Welcome Back
          </div>
          <div className='[font-family:var(--font-league)] text-base sm:text-xl font-normal text-[#717171] self-center'>
            Log In to explore the world of tutors
          </div>
          <div className='flex flex-col gap-[24px]'>
            <CustomInput type='text' placeholder='Email' leftIcon={'/mail.svg'} />
            <CustomInput
              type={type}
              placeholder='Password'
              leftIcon={'/key1.svg'}
              rightIcon={icon}
              onRightIconClick={toggleVisibility}
            />

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
