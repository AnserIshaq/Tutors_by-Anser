import AuthBar from '../Components/AuthBar'
import React, { useState } from 'react'
import { Select, Space } from 'antd'
import usePasswordToggle from '../Hooks/usePasswordToggle'
import { useNavigate } from 'react-router'
import { CustomButton } from '../Components/ui/CustomButton'
import CustomInput from '../Components/ui/CustomInput'
import CustomSelect from '../Components/ui/CustomSelect'

const SignupScreen = () => {
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
  const selectOptions = [
    { value: 'teacher', label: 'Teacher' },
    { value: 'student', label: 'Student' },
  ]

  const handleSignup = () => {
    navigate('/verify-email')
  }
  return (
    <>
      <AuthBar />
      <div>
        <div className='common-auth-container'>
          <div className='[font-family:var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl self-center'>
            Sign Up
          </div>
          <div className=' [font-family:var(--font-league)] text-base sm:text-2xl font-semibold text-[#181A20]'>
            Sign up as a
          </div>
          <div className=' flex flex-col gap-[24px]'>
            <CustomSelect
            defaultValue={'Select...'}
              onChange={handleChange}
              options={selectOptions}
              selectClassName={'pl-[48px]!'}
              leftIcon={'/Group.svg'}
              rightIcon={'/select-arrow.svg'}
              height={'h-[60px]!'}
              rounded={'rounded-[10px]' }
              leftIconClassName={'z-10'}
            />
            {nextBtn && <CustomButton onClick={handleNext} text={'Next'} />}
          </div>
          {detailSection && (
            <>
              <div className=' [font-family:var(--font-league)] text-base sm:text-2xl font-semibold text-[#181A20]'>
                Your Details
              </div>
              <div className='flex flex-col gap-[24px]'>
                <CustomInput type={type} placeholder='Email' leftIcon={'/mail.svg'} />
                <CustomInput
                  type={type}
                  placeholder='Password'
                  leftIcon={'/key1.svg'}
                  rightIcon={icon}
                  onRightIconClick={toggleVisibility}
                />
                <CustomButton onClick={handleSignup} text={'Sign Up'} />
              </div>
              <div className=' justify-center items-center flex flex-col gap-[24px]'>
                <p className='text-base sm:text-xl text-[#181A20] font-normal [font-family:var(--font-league)] flex flex-col sm:flex-row gap-1 items-center '>
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
    </>
  )
}

export default SignupScreen
