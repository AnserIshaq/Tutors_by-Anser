import React from 'react'
import { CartData } from '../../Static/CartData'

const CartCard = () => {
  return (
    <>
      {CartData.map((item, idx) => (
        <div key={idx} className='md:h-[170px] border border-[#B1B1B1] p-2.5 rounded-[20px] flex justify-between'>
          <div className='flex gap-[5px] sm:gap-[24px]'>
            <img
              src={item.tutor_image}
              alt={item.tutor_image}
              className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]'
            />
            <div className='flex flex-col gap-1'>
              <span className='text-[#181A20] text-xl md:text-[22px] font-semibold whitespace-nowrap'>
                {item.tutor_name}
              </span>
              <span className='text-base font-normal text-[#B1B1B1] whitespace-nowrap'>{item.tutor_id}</span>
              <span className='text-base font-normal text-[#B1B1B1] whitespace-nowrap'>{item.tutor_location}</span>
              <span className='text-base font-normal text-[#B1B1B1] whitespace-nowrap'>{item.tutor_title}</span>
              <span className='text-base font-normal text-[#B1B1B1] whitespace-nowrap'>{item.tutor_language}</span>
              <span className='text-base font-normal text-[#B1B1B1] whitespace-nowrap'>{item.tutor_added_on}</span>
            </div>
          </div>
          <img src='/deleteIcon.svg' alt='delete' className='w-[24px] cursor-pointer' />
        </div>
      ))}
    </>
  )
}

export default CartCard
