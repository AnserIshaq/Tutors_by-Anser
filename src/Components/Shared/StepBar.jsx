import React from 'react'

const StepBar = ({stepLabels, currentStep}) => {
  console.log(stepLabels)
  return (
    <>
      {stepLabels.map((label, index) => (
        <div className='bar w-full' key={index}>
          <div
            className={`step-custom flex flex-col h-[15px] rounded-[30px] transition-all duration-300 mb-2.5 ${
              index <= currentStep ? 'bg-[#5183F4]' : 'bg-[#EBF5FE]'
            }`}></div>
          <span className='text-[14px] font-normal sm:text-[16px] text-[#181A20]'>{label}</span>
        </div>
      ))}
    </>
  )
}

export default StepBar
