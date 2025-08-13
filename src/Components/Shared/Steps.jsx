import React from 'react'
import Stepper from './Stepper'

const Steps = ({ data, mode }) => {
  const ConditionalTitle = data.every((step) => !!step.desc)
  console.log(ConditionalTitle)
  return (
    <section className='step-section  py-[15px] lg:py-[60px]'>
      <div className='contain pl-[24px] pr-[16px] sm:px-[24px] md:px-[60px] my-[30px] lg:my-[60px]'>
        <div className='content flex flex-col gap-[16px] px-3 lg:pl-3'>
          {ConditionalTitle ? (
            <div className='flex justify-center gap-1.5 [font-family:var(--font-jakarta)] font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#5183F4]'>
              ​ご利用ガイド
            </div>
          ) : (
            <div className='flex justify-center gap-1.5 [font-family:var(--font-jakarta)] font-extrabold text-3xl md:text-4xl lg:text-5xl '>
              How it<span className='text-[#5183F4]'> Works</span>
            </div>
          )}
        </div>
        <div className='stepper-main relative'>
          {data.map((step, index) => (
            <Stepper key={index} {...step} mode={mode}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps
