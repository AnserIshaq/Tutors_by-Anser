import React from 'react'
import { ReasonsData } from '../Static/ReasonsData'

const Reasons = () => {
  return (
    <>
      {ReasonsData.map((item, idx) => (
        <div key={idx} className='content flex gap-[10px] p-[10px]'>
          <div className='icon p-[6px] xl:p-[12px] rounded-[5px] bg-white  h-[60px] w-[60px] flex justify-center items-center'>
            <img src={item.icon} alt='icons' className='h-[36px] w-[36px]' />
          </div>
          <div className='content-inner'>
            <div className='title font-semibold text-xl'>{item.title}</div>
            <div className='desc font-normal text-base text-[#717171]'>{item.desc}</div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Reasons
