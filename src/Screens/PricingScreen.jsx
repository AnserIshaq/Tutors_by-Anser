import React from 'react'
import { ReasonsData } from '../Static/ReasonsData'
import Reasons from '../Components/Shared/Reasons'
import { Divider } from 'antd'

const PricingScreen = () => {
  return (
    <>
      <section>
        <div className='contain sm:px-[24px] md:px-[60px] py-[30px] md:py-[60px]'>
          <div className='bg-[#EBF5FE] rounded-[30px] flex flex-col lg:flex-row p-[15px] md:p-[50px] gap-[24px]'>
            <div className='p-[15px] md:p-[24px] rounded-[30px] bg-[#5183F4] w-full lg:w-[50%] xl:w-[35%] '>
              <h1 className='text-[#FFFFFF] pb-[20px] md:pb-[60px]'>Unique Learning Pathways!</h1>
              <img
                src='/pricing2.jpg'
                alt='pricing'
                className='w-full h-[368px] lg:h-[424px] object-cover rounded-tl-0 rounded-tr-[15px] rounded-br-[15px] rounded-bl-[15px]'
              />
            </div>
            <div className='content w-full  lg:w-[50%] xl:w-[65%] flex flex-col gap-[24px]'>
              <div className='flex flex-col md:flex-row gap-[24px] [font-family:var(--font-jakarta)] text-[#5183F4] text-4xl font-extrabold'>
                <div className='basis-[70%]'>Begin your personalized language Journey!</div>
                <div className='basis-[30%] text-start md:text-end flex flex-col'>
                  <div>Price</div>
                  <div>$8</div>
                </div>
              </div>
              <Divider style={{ width: '100%', border: '1px solid #B1B1B1' }} />
              <div className='points flex flex-col gap-[16px] [font-family:var(--font-league)]'>
                <p className='text-2xl text-[#181A20] font-semibold'>Reasons to learn on Nihongo Talkers</p>
                <Reasons data={ReasonsData} TitleClassName={'text-xl'} descClassName={'text-base'} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PricingScreen
