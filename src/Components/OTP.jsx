import React from 'react'
import { Flex, Input, Typography } from 'antd'
import usePasswordToggle from '../Hooks/usePasswordToggle'

const OTP = () => {
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
            <input
              type={newPassword.type}
              placeholder='New Password'
              className='w-full border border-black h-[60px] rounded-[10px] [font-family:var(--font-league)] p-[16px] text-base sm:text-xl font-normal text-[#B1B1B1] focus-visible:outline-none focus-visible:border-[#5183F4] '
            />
            <img onClick={newPassword.toggleVisibility} src={newPassword.icon} alt='eye' className='absolute top-[15px] right-[10px]' />
          </div>
          <div className='pass-input relative'>
            <input
              type={confirmPassword.type}
              placeholder='Confirm Password'
              className='w-full border border-black rounded-[10px] h-[60px] [font-family:var(--font-league)] p-[16px] text-base sm:text-xl font-normal text-[#B1B1B1] focus-visible:outline-none focus-visible:border-[#5183F4] '
            />
            <img onClick={confirmPassword.toggleVisibility} src={confirmPassword.icon} alt='eye' className='absolute top-[15px] right-[10px]' />
          </div>
          <button className='common-btn'>
            Reset Password
          </button>
        </div>
      </div>
    </div>
  )
}

export default OTP
