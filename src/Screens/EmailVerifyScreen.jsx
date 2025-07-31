import AuthBar from '../Components/Shared/AuthBar'
import {CustomButton} from '../Components/ui/CustomButton'
import CustomOTP from '../Components/ui/CustomOTP'

const EmailVerifyScreen = () => {
  return (
    <>
      <AuthBar />
      <div>
        <div className=' common-auth-container md:px-[0] '>
          <div className=' [font-family:var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl self-center'>
            Email Verification
          </div>
          <div className='[font-family:var(--font-league)] text-base sm:text-xl font-normal text-[#717171] self-center'>
            Enter OTP to verify your email
          </div>
          <div className='px-[16px]'>
            <CustomOTP />
          </div>
          <div className='flex flex-col md:flex-row gap-[24px]'>
            <CustomButton
              text='Resend OTP'
              onClick={() => console.log('prop passed')}
              className='bg-[#FFFFFF] !text-[#5183F4]  border-[2px] border-[#5183F4]'
            />
            <CustomButton text='Verify Email' onClick={() => console.log('prop passed')} className='' />
          </div>
        </div>
      </div>
    </>
  )
}

export default EmailVerifyScreen
