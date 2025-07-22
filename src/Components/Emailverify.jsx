import React from 'react'
import { Flex, Input, Typography } from 'antd'

const Emailverify = () => {
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
      <div className=' common-auth-container md:px-[0] '>
        <div className=' [font-family:var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl self-center'>
          Email Verification
        </div>
        <div className='[font-family:var(--font-league)] text-base sm:text-xl font-normal text-[#717171] self-center'>
          Enter OTP to verify your email
        </div>
        <div className='px-[16px]'>
          <Flex gap='middle' align='flex-start' vertical>
            <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
          </Flex>
        </div>
        <div className='flex flex-col md:flex-row gap-[24px]'>
          <button className='w-full h-[60px] rounded-[10px] bg-[#FFFFFF] [font-family:var(--font-league)] text-[#5183F4] font-semibold text-base sm:text-xl cursor-pointer border-[2px] border-[#5183F4]'>
            Resend OTP
          </button>
          <button className='common-btn'>
            Verify Email
          </button>
        </div>
      </div>
    </div>
  )
}

export default Emailverify
