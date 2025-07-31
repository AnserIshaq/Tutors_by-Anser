import { Divider } from 'antd'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer bg-[#EBF5FE] bg-[url(/footerlayer.png)] [font-family:var(--font-league)]'>
      <div className='footer-main px-0 sm:px-[24px] md:px-[60px] mt-[30px] lg:mt-[60px]  contain'>
        <div className='footer-inner pt-[30px] md:pt-[60px] px-[30px] md:px-[12px] flex flex-col lg:flex-row gap-[24px] '>
          <div className='flex flex-col basis-full lg:basis-[60%] gap-[24px]'>
            <div>
              <img src='/logo.svg' alt='logo' />
            </div>
            <div className='text-base font-normal text-[#717171]'>
              NihongoTalkers.com does not employ any tutors and is not responsible for the conduct of any user on our
              site. All information in member profiles, job posts, applications, and messages is created by users of our
              site and is not generated or verified by NihongoTalkers.com. You are responsible for conducting your own
              diligence to ensure that the job or tutor you choose is appropriate for your needs and complies with
              applicable laws.
            </div>
          </div>
          <div className='flex flex-col sm:flex-row basis-full justify-between lg:basis-[40%] gap-[24px]'>
            <div className='flex basis-full'>
              <ul className='flex flex-col justify-between gap-[20px] font-normal'>
                <li className='text-xl'>Services</li>
                <li className='text-base'>Find Tutors</li>
                <li className='text-base'>About Us</li>
                <li className='text-base'>Contact Us</li>
                <li className='text-base'>FAQ For Tutors</li>
                <li className='text-base'>FAQ For Students</li>
              </ul>
            </div>
            <div className=' basis-full'>
              <div className='text-xl font-normal'>Contact</div>
              <div className='mt-[18px] flex gap-[15px] text-base'>
                <img src='/mail_2.svg' className='text-black' alt='' />
                <div>info@nihongotalkers.com</div>
              </div>
            </div>
          </div>
        </div>
        <Divider />
        <div className='flex flex-col gap-[16px] md:flex-row justify-between p-[18px] text-[#181A20]'>
          <div className='text-base'>© 2024 Nihongo Talkers. ALL RIGHTS RESERVED</div>
          <div className='flex gap-[24px] text-base'>
            <div className='cursor-pointer'>Privacy Policy</div>
            <div className='cursor-pointer'>Terms of use</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
