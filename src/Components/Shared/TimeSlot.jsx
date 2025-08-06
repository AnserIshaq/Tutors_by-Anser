import React from 'react'
import CustomCheckBox from '../ui/CustomCheckBox'

const days = ['日', '月', '火', '水', '木', '金', '土']
const timeSlots = ['06:00 - 09:00', '09:00 - 12:00', '12:00 - 15:00', '15:00 - 18:00', '18:00 - 21:00', '21:00 - 24:00']

const TimeSlotGrid = () => {
  return (
    <div className='inputs flex flex-col gap-[20px] w-full lg:w-[70%]'>
      <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>レッスン場所</p>
      <div className='overflow-x-auto sm:overflow-x-visible'>
        <div className='min-w-full'>
          <div className='grid grid-cols-[125px_repeat(7,minmax(20px,1fr))] gap-[18px] md:gap-[24px]'>
            <div></div>
            {days.map((day, index) => (
              <p
                key={index}
                className='text-base font-normal text-[#181A20] whitespace-nowrap text-start sm:text-center  lg:text-start w-[32px] h-[22px]'>
                {day}
              </p>
            ))}
          </div>
          {timeSlots.map((slot, i) => (
            <div
              key={i}
              className='grid grid-cols-[125px_repeat(7,minmax(15px,1fr))] items-center gap-[24px] mt-[10px]'>
              <p className='text-base font-normal text-[#181A20] whitespace-nowrap'>{slot}</p>
              {days.map((_, j) => (
                <div key={j} className='flex justify-center'>
                  <CustomCheckBox />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TimeSlotGrid
