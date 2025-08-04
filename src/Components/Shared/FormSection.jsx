import React from 'react'
import { CustomButton } from '../ui/CustomButton'
import CustomInput from '../ui/CustomInput'

const FormSection = ({ inputs, title, desc, btnText }) => {
  return (
    <>
      <section className='form-section px-[16px] '>
        <div className='form-main px-0 sm:px-[24px] md:px-[60px] my-[30px] lg:my-[60px] contain  '>
          <div className='form--inner  flex flex-col gap-[24px] py-[30px] md:py-[60px] px-[30px] md:px-[50px] bg-[#5183F4] text-white rounded-[30px]'>
            <div className='title [font-family:var(--font-jakarta)] font-extrabold text-[28px] md:text-3xl xl:text-5xl'>
              {title}
            </div>
            <div className='desc [font-family:var(--font-league)] text-xl font-normal '>{desc}</div>
            <div className='form flex flex-col gap-[24px]'>
              {inputs && (
                <div className='flex w-full gap-[24px] flex-col lg:flex-row'>
                  <CustomInput
                    className='w-full lg:w-[50%]'
                    inputClassName={'border-[#5183F4]! bg-white'}
                    placeholder={'First Name'}
                    leftIcon={'/form-person.svg'}
                  />
                  <CustomInput
                    className='w-full  lg:w-[50%]'
                    inputClassName={'border-[#5183F4]! bg-white'}
                    placeholder={'Last Name'}
                    leftIcon={'/form-person.svg'}
                  />
                </div>
              )}
              <div className='flex flex-col lg:flex-row gap-[24px]'>
                {inputs && (
                  <CustomInput
                    className='basis-full lg:basis-[80%]'
                    inputClassName={'border-[#5183F4]! bg-white'}
                    placeholder={'Email'}
                    leftIcon={'/mail.svg'}
                  />
                )}
                <CustomButton
                  text={btnText}
                  className='bg-white! text-[#5183F4]! basis-full lg:basis-[20%] rounded-[50px] font-medium text-base! py-[15px] px-[23px]'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FormSection
