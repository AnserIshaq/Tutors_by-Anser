import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import CustomTextArea from '../ui/CustomTextArea'
import { CustomButton } from '../ui/CustomButton'
import CustomRating from '../ui/CustomRatingStars'
const CustomModal = ({ modal2Open, setModal2Open }) => {
  return (
    <>
      <Modal centered open={modal2Open} footer={null} onCancel={() => setModal2Open(false)} width={1000}>
        <div className='flex flex-col gap-[14px]'>
          <h1 className='text-[#5183F4] text:xl lg:text-4xl! font-extrabold'>Leave a Review</h1>
          <p className='text-[#252525] text-base md:text-xl font-normal [font-family:var(--font-league]!'>
            How would you rate <span className='font-semibold'>Hironori Takeda</span>
          </p>
          <CustomRating />
          <CustomTextArea
            placeholder={'Write your review in words...'}
            className={
              'h-[180px] bg-[#F7F7F7] placeholder:text-[#B1B1B1] [font-family:var(--font-league]! text-xl font-normal p-[15px]'
            }
          />
          <CustomButton text={'Submit'} className={'py-[15px] px-[23px] w-[150px]! rounded-full self-end text-base! font-medium'} />
        </div>
      </Modal>
    </>
  )
}
export default CustomModal
