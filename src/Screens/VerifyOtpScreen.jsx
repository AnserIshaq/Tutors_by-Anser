import AuthBar from '../Components/Shared/AuthBar'
import usePasswordToggle from '../Hooks/usePasswordToggle'
import CustomInput from '../Components/ui/CustomInput'
import {CustomButton} from '../Components/ui/CustomButton'
import CustomOTP from '../Components/ui/CustomOTP'

const VerifyOtpScreen = () => {
  const newPassword = usePasswordToggle()
  const confirmPassword = usePasswordToggle()
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
            <CustomOTP />
          </div>
          <div className=' [font-family:var(--font-league)] text-base sm:text-2xl font-semibold text-[#181A20]'>
            Reset Password
          </div>
          <div className='flex flex-col gap-[24px]'>
            <CustomInput
              onRightIconClick={newPassword.toggleVisibility}
              type={newPassword.type}
              placeholder='New Password'
              rightIcon={newPassword.icon}
            />
            <CustomInput
              onRightIconClick={confirmPassword.toggleVisibility}
              type={confirmPassword.type}
              placeholder='Confirm Password'
              rightIcon={confirmPassword.icon}
            />
            <CustomButton text='Reset Password' onClick={() => console.log('prop passed')} />
          </div>
        </div>
      </div>{' '}
    </>
  )
}

export default VerifyOtpScreen
