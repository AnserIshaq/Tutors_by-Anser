import React from 'react'
import AuthBar from '../Components/AuthBar'
import { Flex, Input, Typography } from 'antd'
import usePasswordToggle from '../Hooks/usePasswordToggle'
import CustomInput from '../Components/ui/CustomInput'
import CustomButton from '../Components/ui/CustomButton'

const VerifyOtpScreen = () => {
  const { Title } = Typography
  const newPassword = usePasswordToggle()
  const confirmPassword = usePasswordToggle()
  const onChange = (text) => {
    console.log('onChange:', text)
  }
  const onInput = (value) => {
    console.log('onInput:', value)
  }
  const sharedProps = {
    onChange,
    onInput,
  }
  return (
    <>
      <AuthBar />
      <div>
        <div className=' common-auth-container'>
          <div className=' [font-family:var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl self-center'>
            Verify OTP
          </div>
          <div className='[font-family:var(--font-league)] text-base sm:text-xl font-normal text-[#717171] self-center'>
            Enter New Password after OTP
          </div>
          <div className='px-[16px]'>
            <Flex gap='middle' align='flex-start' vertical>
              <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
            </Flex>
          </div>
          <div className=' [font-family:var(--font-league)] text-base sm:text-2xl font-semibold text-[#181A20]'>
            Reset Password
          </div>
          <div className='flex flex-col gap-[24px]'>
            <div className='pass-input relative'>
              <CustomInput onClick={newPassword.toggleVisibility} type={newPassword.type} placeholder='New Password' />
              <img
                onClick={newPassword.toggleVisibility}
                src={newPassword.icon}
                alt='eye'
                className='absolute top-[15px] right-[10px]'
              />
            </div>
            <div className='pass-input relative'>
              <CustomInput
                onClick={confirmPassword.toggleVisibility}
                type={confirmPassword.type}
                placeholder='Confirm Password'
              />
              <img
                onClick={confirmPassword.toggleVisibility}
                src={confirmPassword.icon}
                alt='eye'
                className='absolute top-[15px] right-[10px]'
              />
            </div>
            <CustomButton text='Reset Password' onClick={() => console.log('prop passed')} />
          </div>
        </div>
      </div>{' '}
    </>
  )
}

export default VerifyOtpScreen
