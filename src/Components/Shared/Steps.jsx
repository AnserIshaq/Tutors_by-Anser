import React from 'react'
import Stepper from '../Stepper'
const Steps = () => {
  return (
    <section className='step-section  py-[15px] lg:py-[60px]'>
      <div className='contain pl-[24px] pr-[16px] sm:px-[24px] md:px-[60px] my-[30px] lg:my-[60px]'>
        <div className='content flex flex-col gap-[16px] px-3 lg:pl-3'>
          <div className='flex justify-center gap-1.5 [font-family:var(--font-jakarta)] font-extrabold text-3xl md:text-4xl lg:text-5xl '>
            How it<span className='text-[#5183F4]'> Works</span>
          </div>
        </div>
        <div className='stepper-main py-[50px] relative'>
          <Stepper
            text='1. Browse tutors to review their background, experience, and student feedback.'
            img='/stepper.svg'
            step={'Step 1'}
            mobStep={'1'}
            isFirst
          />
          <Stepper
            reverse
            text='2. Select up to 5 tutors and add your preferred tutors to your cart. Click “My Tutors Cart”'
            img='/stepper2.svg'
            step={'Step 2'}
            mobStep={'2'}
          />
          <Stepper
            text='3. At the checkout page, if you are a first-time user, please create an account with your name and email address.'
            img='/stepper3.svg'
            step={'Step 3'}
            mobStep={'3'}
          />
          <Stepper
            reverse
            text='4. Contact the teachers directly and begin your Japanese lessons.'
            img='/stepper5.svg'
            step={'Step 4'}
            mobStep={'4'}
          />
          <Stepper
            isLast
            text='5. Contact the teachers directly and begin your Japanese lessons.'
            img='/stepper4.svg'
            step={'Step 5'}
            mobStep={'5'}
          />
        </div>
      </div>
    </section>
  )
}

export default Steps
