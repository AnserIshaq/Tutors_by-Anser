import React from 'react'

const StepCircularBar = ({currentStep, stepLabels}) => {
  return (
    <>
      {/* Circular Progress */}
      <div className='relative w-[120px] h-[120px]'>
        <svg className='w-[120px] h-[120px] rotate-[-90deg]'>
          <circle cx='60' cy='60' r='54' stroke='#EBF5FE' strokeWidth='6' fill='none' />
          <circle
            cx='60'
            cy='60'
            r='54'
            stroke='#5183F4'
            strokeWidth='6'
            fill='none'
            strokeDasharray={2 * Math.PI * 54}
            strokeDashoffset={2 * Math.PI * 54 * (1 - (currentStep + 1) / stepLabels.length)}
            strokeLinecap='round'
            className='transition-all duration-300'
          />
        </svg>

        <div className='absolute inset-0 flex items-center justify-center text-[14px] font-semibold text-[#5183F4]'>
          Step
          <br />
          {currentStep + 1} of {stepLabels.length}
        </div>
      </div>

      {/* Descriptions */}
      <div className='flex flex-col'>
        <div className='text-xl font-semibold text-[#181A20] mb-1'>{stepLabels[currentStep]}</div>
        {stepLabels[currentStep + 1] && (
          <div className='text-[14px] font-normal text-[#B1B1B1]'>{stepLabels[currentStep + 1]}</div>
        )}
      </div>
    </>
  )
}

export default StepCircularBar
