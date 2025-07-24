import React from 'react'
import TopBar from '../Components/TopBar'
import CustomSelect from '../Components/ui/CustomSelect'
import { CustomButtonWithIcon } from '../Components/ui/CustomButton'

const LandingScreen = () => {
  return (
    <>
      <TopBar />
      <section>
        <div className='hero contain px-0 sm:px-[24px] md:px-[60px] mt-[30px] lg:mt-[60px]'>
          <div className='min-h-[600px] bg-[#EBF5FE] rounded-[30px] '>
            <div className='content min-h-[600px] flex flex-col justify-between'>
              <div className='hero-content flex flex-col gap-4 p-[15px] sm:p-[30px]'>
                <div className='top-content [font-family:var(--font-jakarta)] font-extrabold text-4xl md:text-5xl lg:text-6xl pt-[15px] lg:pt-[60px]'>
                  <p className=''>Need a Tutor?</p>
                  <p className=''>We can help.</p>
                </div>
                <div className='content-desc'>
                  <p className='text-base lg:text-xl [font-family:var(--font-jakarta)] font-normal text-[#717171]'>
                    Compare and find the best tutors to fit your needs.
                  </p>
                </div>
              </div>
              <div className='pr-[15px] lg:pr-[24px] pl-[15px] lg:pl-[0px] py-[24px] bg-white rounded-[30px]'>
                <div className='selectors border border-[#B1B1B1] flex flex-col lg:flex-row px-[30px] py-[15px] gap-[15px] bg-[#FFFFFF] rounded-[30px]'>
                  <div className='flex flex-col gap-1.5'>
                    <p>Area</p>
                    <CustomSelect
                      rightIcon={'/select-arrow.svg'}
                      selectClassName={'rounded-[100px]! w-full'}
                      defaultValue={'Any'}
                    />
                  </div>
                  <div className='flex flex-col gap-1.5'>
                    <p>Price</p>
                    <CustomSelect
                      rightIcon={'/select-arrow.svg'}
                      selectClassName={'rounded-[100px]! w-full'}
                      defaultValue={'Any'}
                    />
                  </div>
                  <div className='flex flex-col gap-1.5'>
                    <p>Gender</p>
                    <CustomSelect
                      rightIcon={'/select-arrow.svg'}
                      defaultValue={'Any'}
                      selectClassName={'rounded-[100px]! w-full'}
                    />
                  </div>
                  <CustomButtonWithIcon
                    icon={'/Vector.svg'}
                    text={'Find'}
                    className='bg-[#5183F4]! text-white rounded-[100px]'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingScreen
